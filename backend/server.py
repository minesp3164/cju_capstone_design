import os
import base64
import requests
from dotenv import load_dotenv
from flask import Flask, request, jsonify, logging
from flask_cors import CORS
from recommend.face_shape_classification import get_recommend_hairstyle, get_is_person


app = Flask(__name__)
CORS(app)
CORS(app, resources={r'*': {'origins': '*'}})

load_dotenv()
upload_images = os.environ.get('UPLOAD_IMAGES')
result_image = os.environ.get('RESULT_IMAGE')

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


@app.route('/upload', methods=['POST'])
def upload_file():
    global recommendations
    file = request.files['file']
    file_path = os.path.join('image', 'test.jpg')
    file.save(file_path)

    recommendations = get_recommend_hairstyle(file_path)
    is_person = get_is_person(file_path)

    return jsonify({'recommendation': recommendations, 'person': is_person})


@app.route('/result', methods=['GET'])
def get_image():
    try:
        image_paths = recommendations['path']
        encoded_images = []

        for rec in image_paths:
            encoded_image = read_image(rec['path'])
            if encoded_image is None:
                return jsonify({'error': f"Image file '{rec['name']}' not found"}), 404
            encoded_images.append({
                'name': rec['name'],
                'image': encoded_image
            })

        return jsonify({'images': encoded_images})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/process_images', methods=['POST', 'GET'])
def process_images():
    url = upload_images
    file_path1 = os.path.join('image', 'test.jpg')
    file_path2 = os.path.join('image', 'test2.jpg')
    encoded_image1 = read_image(file_path1)
    encoded_image2 = read_image(file_path2)

    data = {
        'file1': encoded_image1,
        'file2': encoded_image2
    }
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 200:
        return jsonify({'message': 'Images processed successfully'}), 200
    else:
        return jsonify({'error': 'Failed to process images'}), response.status_code


@app.route('/get_processed_image', methods=['GET'])
def get_processed_image():
    url = result_image
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if 'image' in data:
            file_path = os.path.join('image', 'hairstyle_syn.jpg')
            save_image(data['image'], file_path)
            return jsonify({'message': 'Processed image received and saved successfully'}), 200
        else:
            return jsonify({'error': 'No image found in response'}), 404
    else:
        return jsonify({'error': 'Failed to get processed image'}), response.status_code


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')