from transformers import pipeline


def face_shape(image):

    # 이미지 분류 모델 불러오기
    pipe = pipeline("image-classification", model="metadome/face_shape_classification")

    result = pipe(image)

    predicted_labels = [[item['label'], item['score']] for item in result]

    face_shape = max(predicted_labels, key=lambda x: x[1])[0]

    shape = {
        "Round": "둥근형 얼굴",
        "Heart": "하트형 얼굴",
        "Oblong": "직사각형 얼굴",
        "Square": "정사각형 얼굴",
        "Oval": "타원형 얼굴"
    }

    return shape[face_shape]



# 결과 출력
