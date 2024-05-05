from typing import Dict, List
import random

from transformers import pipeline
from .data import recommendations
from .gender_classification import get_gender


def rand(n):
    return random.randint(0, n - 1)


def get_face_shape(image: str):
    # 이미지 분류 모델 불러오기
    pipe = pipeline("image-classification", model="metadome/face_shape_classification")
    result = pipe(image)
    predicted_labels = [[item['label'], item['score']] for item in result]
    return max(predicted_labels, key=lambda x: x[1])[0] # Round, Heart, Oblong, Square, Oval


def get_recommend_hairstyle(image):
    face_name: str = get_face_shape(image)
    gender = get_gender(image)
    print(f'gender: {gender}')

    recommends: List[Dict[str, str]] = recommendations[face_name]
    results = list(
        filter(
            lambda rec: rec['sex'] == gender or rec['sex'] == 'common',
            recommends
        )
    )
    item_len = len(results)

    return results[rand(item_len)]
