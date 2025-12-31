from . import run_dev, run_prod
from sys import argv
from .update_schedule import schedule

if len(argv) != 2:
    print('Usage: backend run-dev|run-prod')
    exit(1)

if __name__ == '__main__':
    schedule()
    match argv[1]:
        case 'run-dev':
            run_dev()
        case 'run-prod':
            run_prod()
