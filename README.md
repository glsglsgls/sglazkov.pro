# sglazkov.pro

Личный сайт Сергея Глазкова: лендинг с навыками + раздел «Что по книгам?» (Flask + SQLite).

## Стек

- **Front** — vanilla HTML/CSS/JS (Bootstrap 4, Chart.js). Шапка, подвал и `<head>` (метрика, OG, favicon) собираются nginx-ом через SSI из `front/src/partials/`.
- **Back** — Flask 2.3 под gunicorn, данные в SQLite (`back/db.db`).
- **Deploy** — docker compose. Оба сервиса слушают только loopback (`8001`/`8002`), наружу наружу отдаёт отдельный reverse-proxy.

## Локальный запуск

```sh
docker compose up -d --build
```

- Сайт: http://127.0.0.1:8001/
- API: http://127.0.0.1:8002/api/v1/books
- Health: http://127.0.0.1:8002/healthz

## Структура

- `front/nginx.conf` — конфиг nginx: SSI, gzip, кэш ассетов, 404.
- `front/src/partials/{head,header,footer}.html` — SSI-вставки (единый источник).
- `front/src/js/` — `base.js` (определение базового пути), `books.js` (API), `frog.js` (жаба), `skills.js` (радар).
- `back/Dockerfile` — образ backend'а (пин по digest, healthcheck), `back/db.py` — SQLite-обёртка.
- `.github/workflows/ci.yml` — ruff + pytest (на PR и push в main).
- `.github/workflows/deploy.yml` — авто-деплой по SSH при мердже в `main`.

## Production

При мердже в `main` GitHub Actions по SSH выполняет на сервере
`git pull --ff-only` + `docker compose up -d --build`.
Снаружи сайт доступен за reverse-proxy по пути `/sglazkov.pro`.

### Секреты репозитория

`DEPLOY_HOST`, `DEPLOY_PORT`, `DEPLOY_USER`, `DEPLOY_KEY` (private SSH key), `DEPLOY_HOST_FINGERPRINT`.