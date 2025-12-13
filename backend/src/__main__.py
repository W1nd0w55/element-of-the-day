from app import app
from waitress import serve
from .log import logger
from sys import argv
from update_schedule import schedule

if len(argv) != 2:
    logger.error('Incorrect Usage')
    print(f'Usage: {argv[0]} run-dev')


def run_dev() -> None:
    app.run(host='backend', port=3000, debug=True)


def run_prod() -> None:
    serve(app, host='backend', port=3000)


if __name__ == '__main__':
    schedule()
    match argv[1]:
        case 'run-dev':
            run_dev()
        case 'run-prod':
            run_prod()
