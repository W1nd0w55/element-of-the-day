from random import randint
from threading import Thread
from time import sleep
from datetime import date
from . import elements


# For testing purposes because datetime.date is immutable
def get_today() -> date:
    return date.today()


def schedule() -> None:
    def update_every_minute() -> None:
        while 1:
            update_entry(randint(1, 118))
            sleep(60)

    thread: Thread = Thread(target=update_every_minute, daemon=True)
    thread.start()


def update_entry(element: int) -> None:
    today: date = get_today()
    if elements.current_element[1] == today:
        return

    elements.current_element = element, today
