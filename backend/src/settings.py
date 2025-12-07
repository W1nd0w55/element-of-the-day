from pathlib import Path
from os import environ

BASE_DIR = Path(__file__).resolve().parent.parent

POSTGRES_DB = environ.get('POSTGRES_DB')
POSTGRES_USER = environ.get('POSTGRES_USER')
POSTGRES_PASSWORD = environ.get('POSTGRES_PASSWORD')
POSTGRES_URI = f'{POSTGRES_USER}:{POSTGRES_PASSWORD}@db'
SQLALCHEMY_DATABASE_URI = f'postgresql://{POSTGRES_URI}/{POSTGRES_DB}'
