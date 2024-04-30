from transformers import pipeline
from PIL import Image


def gender_classify(image):
    pipe = pipeline("image-classification", model="rizvandwiki/gender-classification")


    result = pipe(image)

    predicted_label = result[0]['label']

    gender = {
        'male': '남성',
        'female': '여성',
    }
    # 성별
    return gender[predicted_label]