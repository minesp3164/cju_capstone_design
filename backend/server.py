import base64

from flask import Flask, request, jsonify
from recommend.face_shape_classification import get_recommend_hairstyle


app = Flask(__name__)
picture = None


@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save("image/test.jpg")
    return jsonify({'recommendation': get_recommend_hairstyle('image/test.jpg')})
    # return jsonify({'filename': file.filename})



@app.route('/result', methods=['GET', 'POST'])
def get_image():
    try:
        with open('image/test.jpg', 'rb') as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
        return jsonify({'image': encoded_image})
    except FileNotFoundError:
        return jsonify({'error': 'Image file not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
