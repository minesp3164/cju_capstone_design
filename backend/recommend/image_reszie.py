from PIL import Image

def resize_and_convert_to_24bit(input_image_path):
    # 원본 이미지 열기
    with Image.open(input_image_path) as img:
        # 이미지를 1024x1024 픽셀로 리사이즈
        img_resized = img.resize((1024, 1024))

        # 이미지를 24비트로 변환
        img_24bit = img_resized.convert('RGB')

        # 변환된 이미지를 저장
        img_24bit.save(input_image_path)