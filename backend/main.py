from fastapi import FastAPI, Form
import pymysql
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
conn = pymysql.connect(
    host="localhost",
    user="root",
    passwd="password123",
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
    return {"message": "Hello World"}

@app.get("/get_pizza")
def get_pizza():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM pizzas")
    columns = [col[0] for col in cursor.description]
    records = [dict(zip(columns, row)) for row in cursor.fetchall()]
    return records

@app.post("/create_order")
def create_order(customer_name: str = Form(...), pizza_id: int = Form(...), quantity: int = Form(...)):
    cursor = conn.cursor()
    sql = "INSERT INTO orders (customer_name, pizza_id, quantity) VALUES (%s, %s, %s)"
    cursor.execute(sql, (customer_name, pizza_id, quantity))
    conn.commit()
    return {"message": "Order created successfully"}


