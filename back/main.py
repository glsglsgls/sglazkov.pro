from flask import Flask
from flask_cors import CORS, cross_origin
from db import get_db
from dataclasses import dataclass


@dataclass
class Book:
    author: str
    name: str
    comments: str
    img: str


app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def hello_world() -> list[Book]:
    with get_db() as db:
        res = db.execute("select author, name, comments, img from books").fetchall()
    return [
        Book(author=i["author"], name=i["name"], comments=i["comments"], img=i["img"]) for i in res
    ]
