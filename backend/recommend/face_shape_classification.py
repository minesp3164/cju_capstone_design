import random

from transformers import pipeline
from recommend.gender_classification import get_gender
from transformers import DetrImageProcessor, DetrForObjectDetection
from recommend.dbConn import execute_query
import torch

from PIL import Image

#사람 인지 아닌지 혹은 한명인지
def get_is_person(image_path: str) -> bool:
    image = Image.open(image_path)

    # 모델과 프로세서 로드
    processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50", revision="no_timm")
    model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50", revision="no_timm")

    # 입력 데이터 준비
    inputs = processor(images=image, return_tensors="pt")
    outputs = model(**inputs)

    # 출력 데이터를 COCO API 형식으로 변환
    # 스코어가 0.9 이상인 감지만 유지
    target_sizes = torch.tensor([image.size[::-1]])
    results = processor.post_process_object_detection(outputs, target_sizes=target_sizes, threshold=0.9)[0]

    # 결과 출력
    is_person = False
    num_people = 0
    for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
        if model.config.id2label[label.item()] == 'person':
            num_people += 1

    if num_people == 1:
        is_person = True

    return is_person

#얼굴형의 종류
shape = {
    "Round": "둥근형 얼굴",
    "Heart": "하트형 얼굴",
    "Oblong": "직사각형 얼굴",
    "Square": "정사각형 얼굴",
    "Oval": "타원형 얼굴"
}


def rand(n):
    return random.randint(0, n - 1)


#얼굴형 확인하기
def get_face_shape(image: str):
    # 이미지 분류 모델 불러오기
    pipe = pipeline("image-classification", model="metadome/face_shape_classification")
    result = pipe(image)
    predicted_labels = [[item['label'], item['score']] for item in result]
    return max(predicted_labels, key=lambda x: x[1])[0] # Round, Heart, Oblong, Square, Oval


#헤어스타일
def get_recommend_hairstyle(image):
    face_name: str = get_face_shape(image)
    gender = get_gender(image)
    print(f'gender: {gender}')
    shape_name = shape[face_name]

    # DB 연결
    query = "SELECT * FROM hairstyledata WHERE face_shape = %s AND sex = %s"
    params = (face_name, gender)
    results = execute_query(query, params)

    item_len = len(results)

    result = results[rand(item_len)]
    result['face_shape'] = shape_name
    
    # 랜덤으로 가져온 헤어스타일 태그 result에 리스트형태로 저장
    tag_query = """
        SELECT t.name AS Tag_Name
        FROM hairstyletags ht
        JOIN tags t ON ht.tag_id = t.id
        WHERE ht.hairstyle_id = %s
    """

    tag_params = (result['id'])
    tag_results = execute_query(tag_query, tag_params)

    result['tags'] = [tag['Tag_Name'] for tag in tag_results]

    return result


# 3개의 id값으로 헤어스타일
def get_recommend_hairstyle_id(hairstyle_id):
    query = "SELECT * FROM hairstyledata WHERE id IN (%s, %s, %s)"
    params = tuple(hairstyle_id)
    results = execute_query(query, params)

    return results