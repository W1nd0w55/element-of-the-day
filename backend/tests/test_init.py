from pytest_mock import MockerFixture


def test_run(mocker: MockerFixture):
    from src.backend import run_dev, run_prod

    mocker.patch('src.backend.app.app.run', lambda host, port, debug: (host, port, debug))
    mocker.patch('src.backend.serve', lambda app, host, port: (app, host, port))

    run_dev()
    run_prod()
