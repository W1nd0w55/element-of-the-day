from config.app import app
from db import db
from log.loggers import logger

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        logger.info("Database tables created.")
        logger.warning('a')
    app.run(host='backend', port=3000, debug=True)
