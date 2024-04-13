from flask import Flask, render_template, request, redirect, url_for, send_file
import base64


app = Flask(__name__)







if __name__ == '__main__':
    app.run(debug=True)