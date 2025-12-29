from .app import app
from waitress import serve


def run_dev() -> None:
    app.run(host='0.0.0.0', port=3000, debug=True)


def run_prod() -> None:
    serve(app, host='0.0.0.0', port=3000)
