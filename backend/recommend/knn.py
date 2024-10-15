from recommend.dbConn import execute_query
from sklearn.neighbors import NearestNeighbors
import pandas as pd

shape = {
    "둥근형 얼굴": "Round",
    "하트형 얼굴": "Heart",
    "직사각형 얼굴": "Oblong",
    "정사각형 얼굴": "Square",
    "타원형 얼굴": "Oval"
}

def knn_model(face_name, gender, tags):
    query = """
        SELECT h.id AS Hairstyle_ID, h.name AS Hairstyle_Name, ht.tag_id AS Tag_ID, t.name AS Tag_Name
        FROM hairstyledata h
        JOIN hairstyletags ht ON h.id = ht.hairstyle_id
        JOIN tags t ON ht.tag_id = t.id
        WHERE h.face_shape = %s AND h.sex = %s
    """

    shape_name = shape[face_name]

    params = (shape_name, gender)
    results = execute_query(query, params)

    # 반환된 딕셔너리의 키와 맞는 columns를 설정
    columns = ['Hairstyle_ID', 'Hairstyle_Name', 'Tag_ID', 'Tag_Name']
    hairstyle_data_df = pd.DataFrame(results)

    # 헤어스타일 ID 와 태그 이름 추출 및 원-핫 인코딩, 각 헤어스타일 ID별로 태그 벡터를 합침
    hairstyle_tags_df = hairstyle_data_df[['Hairstyle_ID', 'Tag_Name']]
    one_hot_encoded_tags = pd.get_dummies(hairstyle_tags_df['Tag_Name'])
    one_hot_encoded_hairstyles = one_hot_encoded_tags.groupby(hairstyle_tags_df['Hairstyle_ID']).sum()

    # knn 모델 학습
    knn_model = NearestNeighbors(n_neighbors=3, metric='euclidean')
    knn_model.fit(one_hot_encoded_hairstyles)

    # 태그를 원-핫 인코딩하여 입력 벡터로 변환 및 KNN을 사용하여 가장 가까운 헤어스타일 추천
    user_tag_vector = pd.get_dummies(tags).reindex(columns=one_hot_encoded_hairstyles.columns,fill_value=0).values
    # user_tag_vector = pd.get_dummies(tags).reindex(columns=one_hot_encoded_hairstyles.columns, fill_value=0).sum().values.reshape(1, -1)
    distances, indices = knn_model.kneighbors(user_tag_vector)
    recommended_hairstyles = one_hot_encoded_hairstyles.index[indices[0]].tolist()

    return recommended_hairstyles