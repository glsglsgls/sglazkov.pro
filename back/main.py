from flask import Flask
from db import get_db
from dataclasses import dataclass


@dataclass
class Book:
    author: str
    name: str
    comments: str


app = Flask(__name__)


@app.route("/")
def hello_world() -> list[Book]:
    with get_db() as db:
        res = db.execute("select author, name, comments from books").fetchall()
    return [
        Book(author=i["author"], name=i["name"], comments=i["comments"]) for i in res
    ]
