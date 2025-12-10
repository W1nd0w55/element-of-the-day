from app import db
from models import DailyEntry
from datetime import date


def update_entry(element: int) -> None:
    today: date = date.today()
    last_entry: DailyEntry | None = (
        db.session.query(DailyEntry)
        .order_by(DailyEntry.id.desc()).first()
    )
    if last_entry is not None and last_entry.date == today:
        return

    new_entry = DailyEntry(date=today, element=element)
    db.session.add(new_entry)
    db.session.commit()
