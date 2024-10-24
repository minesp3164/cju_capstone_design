import os
import base64
import requests
import threading
from datetime import datetime
from dotenv import load_dotenv
from flask import Flask, request, jsonify, logging
from flask_cors import CORS
from recommend.face_shape_classification import get_recommend_hairstyle, get_is_person, get_recommend_hairstyle_id
from recommend.image_reszie import resize_and_convert_to_24bit
from recommend.knn import knn_model


app = Flask(__name__)
CORS(app)
CORS(app, resources={r'*': {'origins': '*'}})

load_dotenv()
upload = os.environ.get('UPLOAD_IMAGES')
result = os.environ.get('RESULT_IMAGE')


def read_image(file_path):
    try:
        with open(file_path, 'rb') as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
            return encoded_image
    except FileNotFoundError:
        return None


def save_image(encoded_image, file_path):
    with open(file_path, 'wb') as img_file:
        img_file.write(base64.b64decode(encoded_image))


def delete_image(file_path):
    os.remove(file_path)


def save_image_filename():
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_name = f"user_{timestamp}.jpg"
    return file_name


def process_knn_recommendations(recommendations):
    knn_result = knn_model(recommendations['face_shape'], recommendations['sex'],recommendations['tags'])
    knn_recommendations = get_recommend_hairstyle_id(knn_result)

    for recommendation in knn_recommendations:
        image_path = recommendation.get('path')
        recommendation['image'] = read_image(image_path)

    return knn_recommendations


@app.route('/upload', methods=['POST'])
def upload_file():
    global recommendations, file_name
    file = request.files['file']
    file_name = save_image_filename()
    file_path = os.path.join('image', file_name)
    file.save(file_path)
    threading.Timer(3600, delete_image, [file_path]).start()
    recommendations = get_recommend_hairstyle(file_path)
    is_person = get_is_person(file_path)

    return jsonify({'recommendation': recommendations, 'person': is_person})


@app.route('/result', methods=['GET'])
def get_image():
    global recommendations
    encoded_image = read_image(recommendations['path'])

    if encoded_image is None:
        return jsonify({'error': f"Image file '{recommendations['name']}' not found"}), 404
    return jsonify({'images': encoded_image})


@app.route('/get_processed_image', methods=['GET','POST'])
def get_processed_image():
    global recommendations, file_name
    file_path1 = os.path.join('image', file_name)
    file_path2 = recommendations.get('path')
    resize_and_convert_to_24bit(file_path1)
    url = upload
    encoded_image1 = read_image(file_path1)
    encoded_image2 = read_image(file_path2)
    headers = {'Content-Type': 'application/json'}
    data = {
        'file1': encoded_image1,
        'file2': encoded_image2
    }
    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        return jsonify({'message': 'Images processed successfully'}), 200
    else:
        return jsonify({'error': 'Failed to process images'}), response.status_code


@app.route('/get_processed_image_result', methods=['GET','POST'])
def get_processed_image_result():
    global recommendations, knn_recommendations
    url = result
    response = requests.get(url)

    knn_recommendations = process_knn_recommendations(recommendations)

    if response.status_code == 200:
        data = response.json()
        if 'image' in data:
            file_path = os.path.join('image', 'hairstyle_syn.jpg')
            save_image(data['image'], file_path)
            syn_image = os.path.join('image', 'hairstyle_syn.jpg')
            encoding_image = read_image(syn_image)
            return jsonify({'image': encoding_image, 'recommendations': knn_recommendations}), 200
        else:
            return jsonify({'error': 'No image found in response'}), 404
    else:
        return jsonify({'error': 'Failed to get processed image'}), response.status_code


@app.route('/get_processed_image_knn', methods=['POST'])
def get_processed_image_knn():
    global knn_recommendations, select_knn_recommendation, file_name
    data = request.json
    index = data['id']
    select_knn_recommendation = knn_recommendations[index]

    url = upload
    file_path1 = os.path.join('image', file_name)
    file_path2 = select_knn_recommendation['path']
    encoded_image1 = read_image(file_path1)
    encoded_image2 = read_image(file_path2)
    headers = {'Content-Type': 'application/json'}
    data = {
        'file1': encoded_image1,
        'file2': encoded_image2
    }
    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        return jsonify({'message': 'Images processed successfully'}), 200
    else:
        return jsonify({'error': 'Failed to process images'}), response.status_code


@app.route('/get_processed_image_result_knn', methods=['GET','POST'])
def get_processed_image_result_knn():
    global knn_recommendations, select_knn_recommendation
    url = result
    response = requests.get(url)

    knn_recommendations = process_knn_recommendations(select_knn_recommendation)

    if response.status_code == 200:
        data = response.json()
        if 'image' in data:
            file_path = os.path.join('image', 'hairstyle_syn.jpg')
            save_image(data['image'], file_path)
            syn_image = os.path.join('image', 'hairstyle_syn.jpg')
            encoding_image = read_image(syn_image)
            return jsonify({'image': encoding_image, 'recommendations': knn_recommendations}), 200
        else:
            return jsonify({'error': 'No image found in response'}), 404
    else:
        return jsonify({'error': 'Failed to get processed image'}), response.status_code


@app.route('/get_share_url', methods=['GET'])
def get_share_url():
    file_name = 'hairstyle_syn.jpg'
    file_path = os.path.join('image', file_name)

    if not os.path.exists(file_path):
        return jsonify({'error': 'Image not found'}), 404

    image_url = request.host_url + 'image/' + file_name
    return jsonify({'image_url': image_url})


# 이미지 파일을 제공하는 API
@app.route('/image/<path:filename>')
def serve_image(filename):
    return send_from_directory('image', filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')