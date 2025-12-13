from pytest import mark
from pytest_mock import MockerFixture, MockType
from datetime import date


@mark.parametrize('element, day', [
    (43, date(2025, 1, 2)),
    (61, date(2027, 3, 7)),
    (80, date(2025, 8, 9)),
    (35, date(2024, 2, 29)),
    (85, date(2099, 12, 31)),
])
def test_update(mocker: MockerFixture, element: int, day: date) -> None:
    from src import update_schedule, elements

    mock_today: MockType = mocker.patch('src.update_schedule.get_today')
    mock_today.return_value = day

    update_schedule.update_entry(element)
    assert elements.current_element == (element, day)


def test_repeat(mocker: MockerFixture) -> None:
    from src import update_schedule, elements

    # We really don't need this, but whatever tests can run at exactly midnight
    mock_today: MockType = mocker.patch('src.update_schedule.get_today')
    mock_today.return_value = date(2025, 12, 12)

    update_schedule.update_entry(45)  # Rhodium
    update_schedule.update_entry(78)  # Platinum
    update_schedule.update_entry(94)  # Plutonium
    assert elements.current_element[0] == 45


def test_schedule(mocker: MockerFixture) -> None:
    from src import update_schedule, elements
    from time import sleep

    mocker.patch('src.update_schedule.sleep', lambda x: sleep(.1))
    mocker.patch('src.update_schedule.randint', lambda x, y: 43)

    update_schedule.schedule()
    sleep(.5)
    assert elements.current_element[0] == 43
