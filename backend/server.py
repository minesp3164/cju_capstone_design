import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from recommend.face_shape_classification import get_recommend_hairstyle, get_is_person


app = Flask(__name__)
CORS(app)
CORS(app, resources={r'*': {'origins': '*'}})


def read_image(file_path):
    try:
        with open(file_path, 'rb') as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
            return encoded_image
    except FileNotFoundError:
        return None


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
    global recommendations
    try:
        image_paths = get_recommend_hairstyle('image/test.jpg')
        encoded_images = []

        for rec in image_paths:
            encoded_image = read_image(rec['path'])
            if encoded_image is None:
                return jsonify({'error': f"Image file '{rec['name']}' not found"}), 404
            encoded_images.append({
                'image': encoded_image
            })

        return jsonify({'images': encoded_images})
    except Exception as e:
        logging.error(f"Error in get_images: {e}")
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')