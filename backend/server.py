from flask import Flask, render_template, request, redirect, url_for, send_file, jsonify


app = Flask(__name__)


from flask import Flask, request, jsonify

app = Flask(__name__)
picture = None


@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        file = request.files['file']  # 'file'이라는 키로 파일 가져오기
        print(file)
        return jsonify({'filename': file.filename})
    except KeyError:

        return jsonify({'error': 'No file part'}), 400  # 'file' 키가 없는 경우 에러 응답


@app.route('/result', methods=['GET', 'POST'])
def get_image():
    try:
        # 이미지 파일 경로 설정
        image_path = 'path/to/your/image.jpg'  # 이미지 파일 경로를 적절히 수정해주세요

        # 파일이 존재하는지 확인
        if os.path.exists(image_path):
            # 이미지 파일을 클라이언트로 보냄
            return send_file(image_path, mimetype='image/jpg')
        else:
            return jsonify({'error': 'Image not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)