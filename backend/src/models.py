from sqlalchemy import Column, Integer, Date
from flask_sqlalchemy.model import Model
from datetime import date as date_


class DailyEntry(Model):
    __tablename__ = 'entries'

    id = Column(Integer, primary_key=True)
    date = Column(Date, unique=True, nullable=False, default=date_.today())
    element = Column(Integer, unique=False, nullable=False, default=10)
