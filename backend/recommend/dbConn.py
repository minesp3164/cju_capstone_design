import os
from dotenv import load_dotenv
import pymysql

load_dotenv()
HOST = os.environ.get('HOST')
USER = os.environ.get('USER')
PASSWORD = os.environ.get('PASSWORD')
DB = os.environ.get('DB')

def connect_database():
    try:
        conn = pymysql.connect(host=HOST, user=USER, password=PASSWORD, db=DB, charset='utf8', cursorclass=pymysql.cursors.DictCursor)
        return conn
    except Exception as e:
        print(e)
        return None

def execute_query(query, params=None):
    conn = connect_database()
    if conn is None:
        return None
    try:
        with conn.cursor() as cursor:
            cursor.execute(query, params)
            result = cursor.fetchall()
            return result
    except Exception as e:
        print(e)
        return None
    finally:
        conn.close()