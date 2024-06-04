import base64

from flask import Flask, request, jsonify
from flask_cors import CORS
from recommend.face_shape_classification import get_recommend_hairstyle, get_is_person


app = Flask(__name__)
CORS(app)
CORS(app,resource={r'*':{'origins':'*'}})
picture = None


@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file_path = "image/test.jpg"
    file.save(file_path)

    recommendations = get_recommend_hairstyle(file_path)
    is_person = get_is_person(file_path)

    return jsonify({'recommendation': recommendations, 'person': is_person})

@app.route('/result', methods=['GET', 'POST'])
def get_image():
    try:
        image_paths = get_recommend_hairstyle('image/test.jpg')

        encoded_images = []
        for rec in image_paths:
            path = rec['path']
            with open(path, 'rb') as img_file:
                encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
                encoded_images.append({
                    'name': rec['name'],
                    'image': encoded_image
                })

        return jsonify({'images': encoded_images})
    except FileNotFoundError:
        return jsonify({'error': 'Image file not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')