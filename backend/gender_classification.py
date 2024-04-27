from transformers import pipeline
from PIL import Image

# 이미지 분류 모델 불러오기
pipe = pipeline("image-classification", model="rizvandwiki/gender-classification")

# 이미지 파일 불러오기
image_path = "image/image01.jpg"
image = Image.open(image_path)

# 이미지 분류 수행
result = pipe(image)

predicted_label = result[0]['label']

# 성별
if predicted_label == 'male':
    predicted_label = '남성'
elif predicted_label == 'female':
    predicted_label = '여성'

# 결과 출력
print(predicted_label)