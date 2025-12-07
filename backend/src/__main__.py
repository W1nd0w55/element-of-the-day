from app import app, db
from log.loggers import logger
from sys import argv

if len(argv) != 2:
    logger.error('Incorrect Usage')
    print(f'Usage: {argv[0]} run-dev')


def run_dev() -> None:
    app.run(host='backend', port=3000, debug=True)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        logger.info("Database tables created.")

    match argv[1]:
        case 'run-dev':
            run_dev()
