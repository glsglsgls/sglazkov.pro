from dataclasses import dataclass

from flask import Flask
from flask_cors import CORS, cross_origin

from db import get_db


@dataclass
class Book:
    author: str
    name: str
    comments: str
    img: str


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/v1/books")
@cross_origin()
def list_books() -> list[Book]:
    with get_db() as db:
        res = db.execute("select author, name, comments, img from books").fetchall()
    return [
        Book(author=i["author"], name=i["name"], comments=i["comments"], img=i["img"]) for i in res
    ]


@app.route("/healthz")
def healthz() -> str:
    return "ok"