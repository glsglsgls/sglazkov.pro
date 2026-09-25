import sqlite3
from sqlite3 import Cursor


class SQLite:
    def __enter__(self) -> Cursor:
        self.connection: sqlite3.Connection = sqlite3.connect("db.db")
        self.connection.row_factory = sqlite3.Row
        self.cursor: sqlite3.Cursor = self.connection.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.close()


def get_db() -> SQLite:
    return SQLite()