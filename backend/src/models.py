from sqlalchemy import Column, Integer, Date
from flask_sqlalchemy.model import Model
from datetime import date


class DailyEntry(Model):
    __tablename__ = 'entries'

    id = Column(Integer, primary_key=True)
    date = Column(Date, unique=True, nullbale=False, default=date.today())
    element = Column(Integer, unique=False, nullable=False, default=1)
