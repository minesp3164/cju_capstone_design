import os
from dotenv import load_dotenv
import pymysql

from data import recommendations

load_dotenv()
HOST = os.environ.get('HOST')
USER = os.environ.get('USER')
PASSWORD = os.environ.get('PASSWORD')
DB = os.environ.get('DB')

conn = pymysql.connect(host=HOST, user=USER, password=PASSWORD, db=DB, charset='utf8')
cur = conn.cursor()

for face_shape, hairstyles in recommendations.items():
    for hairstyle in hairstyles:
        name = hairstyle['name']
        description = hairstyle['desc']
        sex = hairstyle['sex']
        path = hairstyle['path'] if hairstyle['path'] else None

        cur.execute('''
            INSERT INTO hairstyledata (name, description, sex, path, face_shape)
            VALUES (%s, %s, %s, %s, %s)
        ''', (name, description, sex, path, face_shape))

conn.commit()
conn.close()