from flask import Flask, render_template, request, redirect, url_for, send_file, jsonify
import base64


app = Flask(__name__)





@app.route('/genderCheck', methods=['POST', 'OPTIONS'])
def genderCheck():
    if request.method == 'POST':
        gender_data = request.json
        return jsonify(gender_data)
    elif request.method == 'OPTIONS':  # OPTIONS 메서드에 대한 응답 추가
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = '*'  # CORS 정책 허용
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        response.headers['Access-Control-Allow-Methods'] = 'POST'
        return response




if __name__ == '__main__':
    app.run(debug=True)