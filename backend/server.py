import base64

from flask import Flask, render_template, request, redirect, url_for, send_file, jsonify


app = Flask(__name__)


from flask import Flask, request, jsonify

app = Flask(__name__)
picture = None


@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        file = request.files['file']  # 'file'이라는 키로 파일 가져오기
        file.save("image/test.jpg")
        return jsonify({'filename': file.filename})
    except KeyError:

        return jsonify({'error': 'No file part'}), 400  # 'file' 키가 없는 경우 에러 응답


@app.route('/result', methods=['GET', 'POST'])
def get_image():
    try:
        with open('image/1.jpg', 'rb') as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
        return jsonify({'image': encoded_image})
    except FileNotFoundError:
        return jsonify({'error': 'Image file not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)