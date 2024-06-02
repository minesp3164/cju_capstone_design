from typing import Dict, List


round_face_recommendations: List[Dict[str, str]] = [
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/long_bob.jpg'},
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/side_part.jpg'},
    {'name': "웨이브 펌", 'desc': '약간의 웨이브를 넣은 스타일은 둥근 얼굴형에 잘 어울리며, 얼굴을 길어 보이게 해줄 수 있어요.', 'sex': 'male', 'path': '../image/male_hairstyle/round/wave_perm.jpg'},
    {'name': "볼륨 펌", 'desc': '볼륨펌은 자연스러운 볼륨을 더해 머리가 풍성해 보이도록 하는 펌 스타일로, 얇거나 가는 머리카락에 특히 효과적입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/volume_perm.jpg'},
    {'name': "에그 펌", 'desc': '머리카락을 약간 곱슬하게 말아내어 부드럽고 우아한 웨이브를 연출합니다. 이 스타일은 자연스럽고 곡선적인 형태를 보이며, 고급스러운 분위기를 연출할 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/egg_perm.jpg'},
    {'name': "버즈 컷", 'desc': '반삭과도 같은 윗 기장감에 짧게 다듬은 옆,뒤로 형태를 완성합니다. 버즈컷은 모험심이 강하거나 그와 맞는 스타일을 갖춘 사람만이 소화해낼 수 있는 헤어컷입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/buzz.jpg'},
    {'name': "페이드 컷", 'desc': '머리 옆과 뒤를 점차 짧게 깎아 위쪽으로 갈수록 길어지게 하는 남성 헤어스타일로, 깔끔하고 세련된 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/fade_cut.jpg'},
    {'name': "가일 컷", 'desc': '게임 "스트리트 파이터"의 캐릭터 가일에서 영감을 받은 헤어스타일로, 위쪽 머리를 길게 남기고 옆과 뒷머리를 짧게 깎아 세우는 스타일입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/guile_cut.jpg'},
    {'name': "하이 앤 타이트 컷", 'desc': '머리 윗부분은 길게 자르고 옆과 뒷부분은 짧게 깎아 스타일링하는 헤어컷으로, 위로 높게 솟은 머리와 깔끔한 옆부분이 특징입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/high_and_tight.jpg'},
    {'name': "아이비 리그 컷", 'desc': '고전적이고 우아한 느낌을 주는 헤어스타일로, 옆머리를 짧게 깎고 윗머리를 적당히 길게 남겨서 뒤로 정리하는 스타일입니다. 옆머리와 뒷머리 사이에 선명한 선을 만들어 시원한 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/ivy_league_cut.jpg'},
    {'name': "포마드 펌", 'desc': '머리카락을 잘 정돈하고 유지하는데 사용되는 스타일링 제품으로, 고전적이고 세련된 느낌을 연출합니다. 보통 머리카락에 광택을 줘 화려하고 세련된 느낌을 연출하며, 긴 시간 동안 스타일을 유지해줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/pomade_perm.jpg'},
    {'name': "리젠트 컷", 'desc': '머리 윗부분이 길고 옆과 뒷부분은 짧게 깎아 스타일링하는 헤어컷으로, 특히 머리 윗부분에 높은 볼륨을 줘 유니크하고 세련된 룩을 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/regent_cut.jpg'},
    {'name': "시스루 컷", 'desc': '남자 시스루컷은 앞머리를 가볍고 자연스럽게 내려 이마가 약간 비치게 하는 스타일로, 부드럽고 세련된 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/see_through.jpg'},
    {'name': "투 블럭 컷", 'desc': '단발머리 아래쪽 절반을 이발기로 다듬어 위쪽 절반을 그대로 남겨 턱이 생기도록 한 헤어스타일입니다. 앞머리와 윗머리는 남기고 옆 뒷머리를 짧게 치는 헤어스타일로, 머리가 두 부분으로 나뉜다고 해서 투 블록이라고 불립니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/two_block.jpg'},
    {'name': "언더 컷", 'desc': '머리 전체를 일정한 길이로 깎은 후, 머리의 하부나 한쪽 옆부분을 매우 짧게 깎아 스타일링하는 헤어컷 스타일입니다. 이 스타일은 긴 윗머리와 짧은 옆머리의 대조가 독특하며, 현대적이고 개성 있는 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/round/under_cut.jpg'},
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/long_layered_cut.jpg'},
    {'name': "버드 컷", 'desc': '목선 위로 짧게 자른 헤어스타일로, 새의 깃털처럼 가볍고 날렵한 느낌을 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/bird_cut.jpg'},
    {'name': "그레이스 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 자연스럽게 흐르는 컬이 특징입니다. 이 스타일은 고급스러우면서도 로맨틱한 분위기를 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/grace_perm.jpg'},
    {'name': "허그 컷", 'desc': '얼굴을 감싸는 듯한 느낌을 주는 헤어스타일로, 앞머리를 길게 자르고 옆머리를 짧게 깎아 층을 내어 자연스럽고 부드러운 느낌을 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/hug_cut.jpg'},
    {'name': "허쉬 컷", 'desc': '부드럽고 자연스러운 곱슬을 연출하는 헤어스타일로, 머리에 볼륨과 우아함을 부여합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/hush_cut.jpg'},
    {'name': "미스티 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 자연스러운 느낌과 섬세한 포인트를 강조합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/misty_perm.jpg'},
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/long_bob_cut.jpg'},
    {'name': "클라우드 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 공중에 떠 있는 구름처럼 부드러운 느낌을 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/cloud_perm.jpg'},
    {'name': "웨이브 펌", 'desc': '약간의 웨이브를 넣은 스타일은 둥근 얼굴형에 잘 어울리며, 얼굴을 길어 보이게 해줄 수 있어요.', 'sex': 'common', 'path': '../image/female_hairstyle/round/wave_perm.jpg'},
    {'name': "볼륨 펌", 'desc': '머리카락에 볼륨과 우아함을 부여하는 헤어스타일로, 부드럽고 우아한 곡선을 연출합니다. 자연스러운 웨이브와 풍성한 볼륨을 강조하여 머리를 풍성하게 보이게 합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/volume_perm.jpg'},
    {'name': "에그 펌", 'desc': '부드러운 곡선과 자연스러운 볼륨감을 강조한 웨이브 펌으로, 달걀형 얼굴처럼 부드럽고 둥근 느낌을 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/round/egg_perm.jpg'}
]


heart_face_recommendations: List[Dict[str, str]] = [
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/side_part.jpg'},
    {'name': "풀 보브", 'desc': '풀 보브 컷은 긴 머리를 가지고 양 옆과 뒷부분을 다소 짧게 자르고, 머리 위쪽을 길게 자른 후 보브 스타일로 스타일링하는 헤어컷입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/full_bob.jpg'},
    {'name': "미디움 레이어드 컷", 'desc': '중간 정도의 길이의 머리카락에 층을 내어 스타일링하는 헤어컷입니다. 이 스타일은 보통 어깨 아래까지의 길이의 머리를 가지고 층을 자르는데, 이를 통해 머리카락이 자연스럽게 움직이며 볼륨감이 살아나는 효과를 얻을 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/midium_layered_cut.jpg'},
    {'name': "에그 펌", 'desc': '머리카락을 약간 곱슬하게 말아내어 부드럽고 우아한 웨이브를 연출합니다. 이 스타일은 자연스럽고 곡선적인 형태를 보이며, 고급스러운 분위기를 연출할 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/egg_perm.jpg'},
    {'name': "애즈 컷", 'desc': '머리를 짧게 깎은 후 위쪽으로 스타일링하는 헤어컷으로, 전반적으로 길이가 짧고 균일하며, 옆부분이나 뒷부분을 살짝 길게 남겨 스타일을 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/adze_cut.jpg'},
    {'name': "리프 컷", 'desc': '층을 많이 내어 가볍고 자연스러운 느낌을 주는 헤어스타일로, 머리카락이 부드럽게 떨어져 볼륨감을 강조합니다. 얼굴을 작고 갸름하게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/leaf_cut.jpg'},
    {'name': "시스루 컷", 'desc': '남자 시스루컷은 앞머리를 가볍고 자연스럽게 내려 이마가 약간 비치게 하는 스타일로, 부드럽고 세련된 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/see_through_cut.jpg'},
    {'name': "투 블럭 컷", 'desc': '단발머리 아래쪽 절반을 이발기로 다듬어 위쪽 절반을 그대로 남겨 턱이 생기도록 한 헤어스타일입니다. 앞머리와 윗머리는 남기고 옆 뒷머리를 짧게 치는 헤어스타일로, 머리가 두 부분으로 나뉜다고 해서 투 블록이라고 불립니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/two_block.jpg'},
    {'name': "볼륨 펌", 'desc': '머리카락에 볼륨과 높이를 주어 풍성하고 화려한 느낌을 연출하는 헤어스타일입니다. 볼륨컷은 자신감 있고 세련된 느낌을 주며, 다양한 머리 스타일과 잘 어울리는 헤어컷 중 하나입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/heart/volume_perm.jpg'},
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/long layered_cut.jpg'},
    {'name': "롱 스트레이트", 'desc': '약간의 웨이브를 넣은 스타일은 둥근 얼굴형에 잘 어울리며, 얼굴을 길어 보이게 해줄 수 있어요.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/long_straight_cut.jpg'},
    {'name': '레이어드 보브', 'desc': '턱선 길이의 보브 스타일에 여러 층을 추가하여 볼륨과 움직임을 더하는 헤어스타일입니다. 이 스타일은 얼굴을 작아 보이게 하며, 세련되고 현대적인 이미지를 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/layered_bob_cut.jpg'},
    {'name': "벌룬 펌", 'desc': '풍성하고 볼륨감 있는 웨이브를 연출하는 헤어스타일로, 얼굴을 작아 보이게 하고 부드러운 이미지를 강조합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/balloon_perm.jpg'},
    {'name': "보브 컷", 'desc': '어깨 라인을 기준으로 길이가 짧게 자른 헤어스타일로, 앞머리와 뒷머리의 길이가 비슷하게 유지됩니다. ', 'sex': 'female', 'path': '../image/female_hairstyle/heart/bob_cut.jpg'},
    {'name': "보더 펌", 'desc': '부드럽고 자연스러운 웨이브를 연출하는 헤어스타일로, 헤어 끝에 경사를 주어 자연스러운 곡선을 형성합니다. 부드럽고 우아한 느낌을 주며, 머리카락을 풍성하게 보이게 합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/boder.jpg'},
    {'name': "레아 펌", 'desc': '자연스러운 컬과 볼륨감을 강조한 헤어스타일로, 얼굴 윤곽을 부드럽게 보이게 하고 우아하면서도 캐주얼한 느낌을 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/lea_perm.jpg'},
    {'name': "러플 펌", 'desc': '부드럽고 자연스러운 웨이브를 강조하는 헤어스타일로, 머리카락을 부드럽게 풀어 풍성한 볼륨을 연출합니다. ', 'sex': 'female', 'path': '../image/female_hairstyle/heart/ruffle_perm.jpg'},
    {'name': "풀 보브", 'desc': '풀 보브 컷은 머리 길이를 균일하게 자르고 턱선까지 내려오는 길이로 스타일링하여 세련되고 단정한 느낌을 주는 여성 헤어스타일입니다. 이 스타일은 다양한 얼굴형에 어울리며 관리가 비교적 쉬운 것이 특징입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/full_bob.jpg'},
    {'name': "미디움 레이어드 컷", 'desc': '중간 길이의 머리카락에 층을 내어 자연스럽고 부드러운 웨이브를 연출하는 헤어스타일입니다. 다양한 얼굴형에 어울리며, 세련되고 현대적인 느낌을 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/midium_layered_cut.jpg'},
    {'name': "에그 펌", 'desc': '부드러운 곡선과 자연스러운 볼륨감을 강조한 웨이브 펌으로, 달걀형 얼굴처럼 부드럽고 둥근 느낌을 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/heart/egg_perm.jpg'}
]


oblong_face_recommendations: List[Dict[str, str]] = [
    {'name': "사이드 파트", 'desc': '한쪽으로 스타일링한 파트가 얼굴을 좀 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/side_part.jpg'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/side_swift.jpg'},
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/long_bob.jpg'},
    {'name': "애즈 컷", 'desc': '머리를 짧게 깎은 후 위쪽으로 스타일링하는 헤어컷으로, 전반적으로 길이가 짧고 균일하며, 옆부분이나 뒷부분을 살짝 길게 남겨 스타일을 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/adze_cut.jpg'},
    {'name': "센터 파트 펌", 'desc': '머리를 중앙에서 가르는 스타일로, 머리카락을 가운데로 나누어 정돈하는 것을 의미합니다. 이 스타일은 주로 머리카락을 길게 남기고, 중앙을 가르는데 사용되며, 층을 내어 부드럽고 자연스러운 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/center_part_perm.jpg'},
    {'name': "댄디 컷", 'desc': '머리 길이가 앞머리는 눈썹, 윗머리는 아래로 내려오고, 구레나룻은 적당히 길지 않으면서 옆머리는 귀를 덮지 않고, 뒷머리는 짧게 한 스타일의 컷을 말합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/dandy_cut.jpg'},
    {'name': "리프 컷", 'desc': '층을 많이 내어 가볍고 자연스러운 느낌을 주는 헤어스타일로, 머리카락이 부드럽게 떨어져 볼륨감을 강조합니다. 얼굴을 작고 갸름하게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/leaf_cut.jpg'},
    {'name': "시스루 컷", 'desc': '남자 시스루컷은 앞머리를 가볍고 자연스럽게 내려 이마가 약간 비치게 하는 스타일로, 부드럽고 세련된 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/see_through.jpg'},
    {'name': "세미 드롭 컷", 'desc': '머리 위쪽을 약간 자르고 뒤로 가면서 길이를 조금씩 늘여주는 헤어스타일로, 전체적으로 자연스럽고 부드러운 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/semi_drop_cut.jpg'},
    {'name': "쉐도우 펌", 'desc': '헤어 컬러링 기술 중 하나로, 머리카락에 약간의 그림자를 입히는 것을 의미합니다. 머릿결이 더욱 풍부해 보이고 볼륨감이 느껴지는 효과를 낼 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/shadow_cut.jpg'},
    {'name': "투 블럭 컷", 'desc': '단발머리 아래쪽 절반을 이발기로 다듬어 위쪽 절반을 그대로 남겨 턱이 생기도록 한 헤어스타일입니다. 앞머리와 윗머리는 남기고 옆 뒷머리를 짧게 치는 헤어스타일로, 머리가 두 부분으로 나뉜다고 해서 투 블록이라고 불립니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oblong/two_block.jpg'},
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/long_layered_cut.jpg'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/side_swift.jpg'},
    {'name': "소프트 웨이브", 'desc': '부드러운 웨이브를 넣어서 얼굴의 각도를 부드럽게 만들어주고, 전체적인 룩을 부드럽고 여성스럽게 만들어줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/soft_wave.jpg'},
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/long_bob.jpg'},
    {'name': "벌룬 펌", 'desc': '풍성하고 볼륨감 있는 웨이브를 연출하는 헤어스타일로, 얼굴을 작아 보이게 하고 부드러운 이미지를 강조합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/balloon_perm.jpg'},
    {'name': "빌드 펌", 'desc': '볼륨을 높이고 곱슬을 부여하여 머리카락을 더 풍성하고 우아하게 연출하는 헤어스타일입니다. 긴 머리에서부터 짧은 머리까지 다양한 길이와 스타일에 적용할 수 있습니다', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/build_perm.jpg'},
    {'name': "다이앤 펌", 'desc': '부드럽고 우아한 곱슬을 연출하는 헤어스타일로, 풍성한 볼륨과 우아한 웨이브가 특징입니다. 자연스러운 곡선과 부드러운 느낌을 강조하여 로맨틱하고 우아한 분위기를 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/diann_perm.jpg'},
    {'name': "그레이스 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 자연스럽게 흐르는 컬이 특징입니다. 이 스타일은 고급스러우면서도 로맨틱한 분위기를 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/grace_perm.jpg'},
    {'name': "허쉬 컷", 'desc': '부드럽고 자연스러운 곱슬을 연출하는 헤어스타일로, 머리에 볼륨과 우아함을 부여합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/hush_cut.jpg'},
    {'name': "미로 펌", 'desc': '부드럽고 우아한 곱슬을 연출하는 헤어스타일로, 머리카락을 부드럽게 말아 풍성한 볼륨을 만들어냅니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/miro_perm.jpg'},
    {'name': "모드 펌", 'desc': '머리카락에 자연스럽고 우아한 웨이브를 연출하는 헤어스타일입니다. 이 스타일은 곱슬을 부드럽게 말아 부드러운 곡선을 형성하며, 풍성한 볼륨과 우아함을 강조합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/mods_perm.jpg'},
    {'name': "모드 컷", 'desc': '짧게 깎은 머리를 중심으로 모자이크 모양의 스타일을 연출하는 헤어컷입니다. 이 스타일은 일반적으로 양쪽 옆머리와 뒤머리를 짧게 자르고, 중앙 부분을 길게 남겨 화려한 디자인을 만듭니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/mods_cut.jpg'},
    {'name': "레인 펌", 'desc': '자연스러운 곱슬을 형성하여 머리카락을 길어 보이게 만드는 헤어스타일입니다. 머리카락의 길이와 층을 조절하여 자연스럽고 우아한 웨이브를 만들어냅니다', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/rain_perm.jpg'},
    {'name': "르네 펌", 'desc': '자연스럽고 볼륨감 있는 웨이브를 연출하는 펌 스타일로, 부드럽고 풍성한 느낌을 주며, 손질이 쉽고 다양한 길이에 어울립니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/rene_perm.jpg'},
    {'name': "샌드 컷", 'desc': '층을 많이 내어 부드럽고 자연스러운 움직임을 강조하는 컷으로, 가벼운 느낌을 연출하며, 특히 얇은 머리카락에 볼륨감을 더해줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/sand_cut.jpg'},
    {'name': "윈드 펌", 'desc': '바람에 날리는 듯한 자연스러운 곱슬을 만드는 펌 스타일로, 자유롭고 캐주얼한 느낌을 주며, 자연스러운 분위기를 선호하는 사람들에게 적합합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oblong/wind_perm.jpg'}
]


square_face_recommendations: List[Dict[str, str]] = [
    {'name': '롱 사이드', 'desc': '한쪽으로 스타일링한 파트가 얼굴의 길이를 강조하면서도 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/long_side.jpg'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/side_swift.jpg'},
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/long_bob.jpg'},
    {'name': "사이드 파트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/side_part.jpg'},
    {'name': "버즈 컷", 'desc': '반삭과도 같은 윗 기장감에 짧게 다듬은 옆,뒤로 형태를 완성합니다. 버즈컷은 모험심이 강하거나 그와 맞는 스타일을 갖춘 사람만이 소화해낼 수 있는 헤어컷입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/buzz_cut.jpg'},
    {'name': "크루 컷", 'desc': '머리카락을 짧게 자른 헤어스타일입니다. 대한민국에서는 주로 스포츠 머리라고 일컬어지고 있습니다', 'sex': 'male', 'path': '../image/male_hairstyle/square/crew_cut.jpg'},
    {'name': "에드가 컷", 'desc': '짧고 직선으로 자른 앞머리와 약간 더 긴 윗머리, 그리고 짧은 옆머리와 뒷머리가 특징인 남성 헤어스타일입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/edgar_cut.jpg'},
    {'name': "페이드 컷", 'desc': '머리 옆과 뒤를 점차 짧게 깎아 위쪽으로 갈수록 길어지게 하는 남성 헤어스타일로, 깔끔하고 세련된 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/fade_cut.jpg'},
    {'name': "가일 컷", 'desc': '게임 "스트리트 파이터"의 캐릭터 가일에서 영감을 받은 헤어스타일로, 위쪽 머리를 길게 남기고 옆과 뒷머리를 짧게 깎아 세우는 스타일입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/Guile_cut.jpg'},
    {'name': "리프 컷", 'desc': '층을 많이 내어 가볍고 자연스러운 느낌을 주는 헤어스타일로, 머리카락이 부드럽게 떨어져 볼륨감을 강조합니다. 얼굴을 작고 갸름하게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/leaf_cut.jpg'},
    {'name': "시스루 컷", 'desc': '남자 시스루컷은 앞머리를 가볍고 자연스럽게 내려 이마가 약간 비치게 하는 스타일로, 부드럽고 세련된 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/square/see_through.jpg'},
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/long_layered_cut.jpg'},
    {'name': '롱 사이드', 'desc': '한쪽으로 스타일링한 파트가 얼굴의 길이를 강조하면서도 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/long_side.jpg'},
    {'name': "사이드 스위프트", 'desc': '한쪽으로 가벼운 스위프트를 주면 얼굴의 각도를 조절하면서도 동시에 매력적인 스타일을 연출할 수 있습니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/side_swift.jpg'},
    {'name': "롱 보브", 'desc': '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/long_bob cut.jpg'},
    {'name': "사이드 파트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/side_part.jpg'},
    {'name': "비치 웨이브", 'desc': '해변에서 말린 듯한 자연스럽고 헐렁한 웨이브로, 편안하고 시원한 분위기를 연출하며, 여름철이나 휴양지에서 인기 있는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/beach_wave_hair.jpg'},
    {'name': "커튼 뱅", 'desc': '얼굴 옆으로 자연스럽게 흘러내리는 긴 앞머리로, 얼굴형을 부드럽게 보완해 주며, 다양한 길이와 스타일에 잘 어울립니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/curtain_bangs.jpg'},
    {'name': "레이어드 컷", 'desc': '층을 내어 볼륨과 움직임을 주는 컷으로, 다양한 스타일링이 가능하고, 얼굴형에 맞춰 조절할 수 있습니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/layerd_cut.jpg'},
    {'name': "프라다 컷", 'desc': '깔끔하고 세련된 단발 스타일로, 엣지 있는 도시적인 느낌을 주며, 관리가 쉬워 바쁜 현대인에게 적합합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/prada_cut.jpg'},
    {'name': "스무스 컷", 'desc': '부드럽고 매끄러운 라인을 강조하는 컷으로, 단정하고 정교한 스타일을 연출하며, 직장이나 공식적인 자리에서도 잘 어울립니다.', 'sex': 'female', 'path': '../image/female_hairstyle/square/smooth_cut.jpg'}
]


oval_face_recommendations: List[Dict[str, str]] = [
    {'name': "사이드 파티트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/side_part.jpg'},
    {'name': "버즈 컷", 'desc': '반삭과도 같은 윗 기장감에 짧게 다듬은 옆,뒤로 형태를 완성합니다. 버즈컷은 모험심이 강하거나 그와 맞는 스타일을 갖춘 사람만이 소화해낼 수 있는 헤어컷입니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/buzz_cut.jpg'},
    {'name': "페이드 컷", 'desc': '머리 옆과 뒤를 점차 짧게 깎아 위쪽으로 갈수록 길어지게 하는 남성 헤어스타일로, 깔끔하고 세련된 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/fade_cut.jpg'},
    {'name': "아이비 리그 컷", 'desc': '고전적이고 우아한 느낌을 주는 헤어스타일로, 옆머리를 짧게 깎고 윗머리를 적당히 길게 남겨서 뒤로 정리하는 스타일입니다. 옆머리와 뒷머리 사이에 선명한 선을 만들어 시원한 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/ivy_league_cut.jpg'},
    {'name': "포마드 펌", 'desc': '머리카락을 잘 정돈하고 유지하는데 사용되는 스타일링 제품으로, 고전적이고 세련된 느낌을 연출합니다. 보통 머리카락에 광택을 줘 화려하고 세련된 느낌을 연출하며, 긴 시간 동안 스타일을 유지해줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/pomade_perm.jpg'},
    {'name': "시스루 컷", 'desc': '남자 시스루컷은 앞머리를 가볍고 자연스럽게 내려 이마가 약간 비치게 하는 스타일로, 부드럽고 세련된 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/see_through.jpg'},
    {'name': "세미 드롭 컷", 'desc': '머리 위쪽을 약간 자르고 뒤로 가면서 길이를 조금씩 늘여주는 헤어스타일로, 전체적으로 자연스럽고 부드러운 느낌을 줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/semi_drop_cut.jpg'},
    {'name': "쉐도우 펌", 'desc': '헤어 컬러링 기술 중 하나로, 머리카락에 약간의 그림자를 입히는 것을 의미합니다. 머릿결이 더욱 풍부해 보이고 볼륨감이 느껴지는 효과를 낼 수 있습니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/shadow_perm.jpg'},
    {'name': "사이드 파트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/side_part.jpg'},
    {'name': "언더 컷", 'desc': '머리 전체를 일정한 길이로 깎은 후, 머리의 하부나 한쪽 옆부분을 매우 짧게 깎아 스타일링하는 헤어컷 스타일입니다. 이 스타일은 긴 윗머리와 짧은 옆머리의 대조가 독특하며, 현대적이고 개성 있는 이미지를 연출합니다.', 'sex': 'male', 'path': '../image/male_hairstyle/oval/under_cut.jpg'},
    {'name': '롱 레이어드', 'desc': '양쪽으로 긴 레이어를 넣어 얼굴을 길게 보이도록 하는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/long_layered_cut.jpg'},
    {'name': "소프트 웨이브", 'desc': '부드러운 웨이브를 넣어서 얼굴의 각도를 부드럽게 만들어주고, 전체적인 룩을 부드럽고 여성스럽게 만들어줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/soft_wave.jpg'},
    {'name': "사이드 파티트", 'desc': '측면에 파트를 만들어 얼굴의 길이를 강조하고, 얼굴을 조금 더 길게 보이도록 도와줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/side_part.jpg'},
    {'name': "레이어드 펌", 'desc': '레이어드 스타일에 파마를 넣어서 얼굴을 더욱 둥글고 부드럽게 만들어줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/layered_perm.jpg'},
    {'name': "클라우드 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 공중에 떠 있는 구름처럼 부드러운 느낌을 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/cloud_perm.jpg'},
    {'name': "커튼 뱅", 'desc': '얼굴 옆으로 자연스럽게 흘러내리는 긴 앞머리로, 얼굴형을 부드럽게 보완해 주며, 다양한 길이와 스타일에 잘 어울립니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/curtain_bangs.jpg'},
    {'name': "그레이스 펌", 'desc': '부드럽고 우아한 웨이브를 연출하는 헤어스타일로, 자연스럽게 흐르는 컬이 특징입니다. 이 스타일은 고급스러우면서도 로맨틱한 분위기를 줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/grace_perm.jpg'},
    {'name': "허그 컷", 'desc': '얼굴을 감싸는 듯한 느낌을 주는 헤어스타일로, 앞머리를 길게 자르고 옆머리를 짧게 깎아 층을 내어 자연스럽고 부드러운 느낌을 연출합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/hug_cut.jpg'},
    {'name': "허쉬 컷", 'desc': '부드럽고 자연스러운 곱슬을 연출하는 헤어스타일로, 머리에 볼륨과 우아함을 부여합니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/hush_cut.jpg'},
    {'name': "샌드 컷", 'desc': '층을 많이 내어 부드럽고 자연스러운 움직임을 강조하는 컷으로, 가벼운 느낌을 연출하며, 특히 얇은 머리카락에 볼륨감을 더해줍니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/sand_cut.jpg'},
    {'name': "슬릭 펌", 'desc': '매끈하고 윤기 나는 곱슬을 만드는 펌 스타일로, 우아하고 고급스러운 느낌을 주며, 특별한 행사나 중요한 자리에서 돋보이는 스타일입니다.', 'sex': 'female', 'path': '../image/female_hairstyle/oval/slick_perm.jpg'},
]

recommendations = {
    'Round': round_face_recommendations,
    'Heart': heart_face_recommendations,
    'Oblong': oblong_face_recommendations,
    'Square': square_face_recommendations,
    'Oval': oval_face_recommendations
}