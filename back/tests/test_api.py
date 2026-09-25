from main import app


def test_books_returns_list():
    client = app.test_client()
    response = client.get("/api/v1/books")
    assert response.status_code == 200
    assert isinstance(response.get_json(), list)


def test_healthz():
    client = app.test_client()
    response = client.get("/healthz")
    assert response.status_code == 200
    assert response.get_data(as_text=True) == "ok"