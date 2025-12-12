from random import randint
from threading import Thread
from time import sleep
from log.loggers import logger
from datetime import date
import elements


def schedule() -> None:
    def update_every_minute() -> None:
        while 1:
            update_entry(randint(1, 118))
            logger.info('Updated')
            sleep(60)
            logger.info('Woke up')

    thread: Thread = Thread(target=update_every_minute)
    thread.start()


def update_entry(element: int) -> None:
    today: date = date.today()
    if elements.current_element[1] == today:
        logger.info('Not setting current element')
        return

    logger.info(f'Setting element to {element}')
    elements.current_element = element, today
    logger.info(f'The element is now {elements.current_element[0]}')
