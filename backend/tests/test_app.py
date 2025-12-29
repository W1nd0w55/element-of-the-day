from pytest_mock import MockerFixture, MockType
from pytest import mark


@mark.parametrize('string', [
    ('Hello, World!',),
    ('Please Pass',),
    ('template weeeee',),
    ('"look, i exist!" ahh app',),
    ('12/29/2025 2:41:44 PM',)
])
def test_404(mocker: MockerFixture, string: str):
    from src.backend.app import error_404

    mocker.patch('src.backend.app.render_template', lambda x: string)

    assert error_404('whatever') == (string, 404)
