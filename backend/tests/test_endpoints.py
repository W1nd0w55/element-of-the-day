from datetime import date
from pytest import mark


@mark.parametrize('element', [
    (43,), (61,), (80,), (35,), (85,)
])
def test_num(element: int) -> None:
    from src.backend.endpoints import get_element_num
    from src.backend import elements

    elements.current_element = (element, date(1970, 1, 1))
    assert get_element_num() == {
        'num': element
    }


@mark.parametrize('num, name, symbol, mass, series, state', [
    (43, 'Technetium', 'Tc', 97.53, 'Transition Metal', 'Solid'),
    (61, 'Promethium', 'Pm', 145.4, 'Lanthanoid', 'Solid'),
    (80, 'Mercury', 'Hg', 200.6, 'Transition Metal', 'Liquid'),
    (35, 'Bromine', 'Br', 79.91, 'Nonmetal', 'Liquid'),
    (85, 'Astatine', 'At', 210.1, 'Metalloid', 'Solid'),
])
def test_info(num: int, name: str, symbol: str, mass: float, series: str, state: str):
    from src.backend.endpoints import get_element_info
    from src.backend import elements

    elements.current_element = (num, date(1970, 1, 1))
    assert get_element_info() == {
        'num': num,       'name': name,
        'symbol': symbol, 'mass': mass,
        'series': series, 'state': state
    }
