from .app import app as application
from waitress import serve


def run_dev() -> None:
    application.run(host='0.0.0.0', port=3000, debug=True)


def run_prod() -> None:
    serve(application, host='0.0.0.0', port=3000)
