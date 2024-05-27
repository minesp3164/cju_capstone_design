from transformers import pipeline


def get_gender(image):
    pipe = pipeline("image-classification", model="rizvandwiki/gender-classification")
    result = pipe(image)
    predicted_label = result[0]['label']
    return predicted_label
