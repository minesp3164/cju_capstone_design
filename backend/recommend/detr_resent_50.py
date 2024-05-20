from transformers import DetrImageProcessor, DetrForObjectDetection
import torch

def get_detr_resent_50(image):
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
    is_people = False
    num_people = 0
    for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
        box = [round(i, 2) for i in box.tolist()]
        label_name = model.config.id2label[label.item()]
        if label_name == 'person':
            num_people += 1

    if num_people > 0:
        is_people = True

    return is_people, num_people