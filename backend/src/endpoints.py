from elements import ELEMENTS
import elements
from log.loggers import logger


def get_element_num() -> dict[str, int]:
    logger.info(f'The element is {elements.current_element[0]}')
    return {'num': elements.current_element[0]}


def get_element_info() -> dict[str, str | int | float]:
    logger.info(f'The element is {elements.current_element[0]}')
    element: int = elements.current_element[0]
    return {
        'num': element,
        'name': ELEMENTS[element][1],
        'symbol': ELEMENTS[element][2],
        'mass': ELEMENTS[element][3],
        'series': ELEMENTS[element][4],
        'state': ELEMENTS[element][5]
    }
