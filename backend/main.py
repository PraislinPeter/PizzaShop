from fastapi import FastAPI,Form
import pymysql
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
conn=pymysql.connect(
    host="localhost",
    user="root",
    passwd="Adonai@1360",
    database="pizza"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
def root():
    return{"message":"Hello World"}

@app.get("/get_pizza")
def get_pizza():
    cursor = conn.cursor()
    cursor.execute("select * from pizzas")
    columns = [col[0] for col in cursor.description]
    records = []
    for row in cursor.fetchall():
        records.append(dict(zip(columns, row)))
    return records