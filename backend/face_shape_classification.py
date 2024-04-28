from transformers import pipeline
from PIL import Image

# 이미지 분류 모델 불러오기
pipe = pipeline("image-classification", model="metadome/face_shape_classification")

# 이미지 파일 불러오기
image_path = "image/image01.jpg"
image = Image.open(image_path)

# 이미지 분류 수행
result = pipe(image)

# 유형별 점수 리스트 저장
predicted_labels = [[item['label'], item['score']] for item in result]

max_label = max(predicted_labels, key=lambda x: x[1])

face_shape = max(predicted_labels, key=lambda x: x[1])[0]

# 얼굴형
if face_shape == 'Round':
    face_shape = '둥근 얼굴'
elif face_shape == 'Heart':
    face_shape = '하트형 얼굴'
elif face_shape == 'Oblong':
    face_shape = '직사각형'
elif face_shape == 'Square':
    face_shape = '정사각형'
elif face_shape == 'Oval':
    face_shape = '타원형 얼굴'

# 결과 출력
print(face_shape)