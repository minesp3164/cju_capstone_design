from transformers import pipeline
from typing import Dict, List


round_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female'},
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male'},
    {'name': "롱 밥", 'desc': '길이가 있는 밥 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'common'},
    {'name': "웨이브 펌", 'desc': '약간의 웨이브를 넣은 스타일은 둥근 얼굴형에 잘 어울리며, 얼굴을 길어 보이게 해줄 수 있어요.', 'sex': 'common'},
]


heart_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female'},
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male'},
    {'name': "풀 밥(Full Bob)", 'desc': '양쪽으로 볼륨 있는 밥 컷은 얼굴의 하트 모양을 부드럽게 잡아주면서 매력을 더해줍니다.', 'sex': 'common'},
    {'name': "롱 스트레이트", 'desc': '약간의 웨이브를 넣은 스타일은 둥근 얼굴형에 잘 어울리며, 얼굴을 길어 보이게 해줄 수 있어요.', 'sex': 'female'},
    {'name': '레이어드 밥', 'desc': '다양한 레이어를 넣어 밥 컷을 스타일링하면 얼굴의 형태를 부드럽게 보정해줄 수 있습니다.', 'sex': 'female'}
]


oblong_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female'},
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'common'},
    {'name': "와이드 프린지(wide fringe)", 'desc': '넓은 프린지를 머리 앞쪽에 넣어서 얼굴의 너비를 줄여주고 동시에 얼굴을 조금 더 동그랗게 보이도록 도와줍니다.', 'sex': 'female'},
    {'name': "롱 밥", 'desc': '길이가 있는 밥 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'common'},
    {'name': "소프트 웨이브", 'desc': '부드러운 웨이브를 넣어서 얼굴의 각도를 부드럽게 만들어주고, 전체적인 룩을 부드럽고 여성스럽게 만들어줍니다.', 'sex': 'female'}
]


square_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female'},
    {'name': '롱 사이드', 'desc': '한쪽으로 스타일링한 파트가 얼굴의 길이를 강조하면서도 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'common'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'common'},
    {'name': "롱 밥", 'desc': '길이가 있는 밥 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'common'},
    {'name': "사이드 파티트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'common'},
]


oval_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female'},
    {'name': "소프트 웨이브", 'desc': '부드러운 웨이브를 넣어서 얼굴의 각도를 부드럽게 만들어주고, 전체적인 룩을 부드럽고 여성스럽게 만들어줍니다.', 'sex': 'female'},
    {'name': "사이드 파티트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'common'},
    {'name': "레이어드 펌", 'desc': '레이어드 스타일에 파마를 넣어서 얼굴을 더욱 둥글고 부드럽게 만들어줍니다.', 'sex': 'female'}
]


def face_shape(image):
    # 이미지 분류 모델 불러오기
    pipe = pipeline("image-classification", model="metadome/face_shape_classification")
    result = pipe(image)
    predicted_labels = [[item['label'], item['score']] for item in result]
    return max(predicted_labels, key=lambda x: x[1])[0] # Round, Heart, Oblong, Square, Oval
