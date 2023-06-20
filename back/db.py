import sqlite3
from sqlite3 import Cursor
from pathlib import Path

class SQLite:
    def __enter__(self) -> Cursor:
        self.connection: sqlite3.Connection = sqlite3.connect('db.db')
        self.connection.row_factory = sqlite3.Row
        self.cursor: sqlite3.Cursor = self.connection.cursor()
        # do not forget this or you will not be able to use methods of the
        # context handler in your with block
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.close()


def get_db() -> SQLite:
    return SQLite()