from app import app
from log.loggers import logger
from sys import argv
from update_schedule import schedule

if len(argv) != 2:
    logger.error('Incorrect Usage')
    print(f'Usage: {argv[0]} run-dev')


def run_dev() -> None:
    app.run(host='backend', port=3000, debug=True)


if __name__ == '__main__':
    schedule()
    match argv[1]:
        case 'run-dev':
            run_dev()
