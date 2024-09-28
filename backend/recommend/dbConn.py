import os
from dotenv import load_dotenv
import pymysql

load_dotenv()
HOST = os.environ.get('HOST')
USER = os.environ.get('USER')
PASSWORD = os.environ.get('PASSWORD')
DB = os.environ.get('DB')

conn = pymysql.connect(host=HOST, user=USER, password=PASSWORD, db=DB, charset='utf8')
cur = conn.cursor()

cur.execute("SELECT * FROM hairstyledata")

while (True):
    row = cur.fetchone()
    if row == None:
        break
    id = row[0]
    name = row[1]
    desc = row[2]
    sex = row[3]
    path = row[4]
    faceshape = row[5]
    print(id, name, desc, sex, path, faceshape)

conn.close()