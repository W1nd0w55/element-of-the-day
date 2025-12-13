from logging import getLogger, Logger
from logging import config
from yaml import safe_load
from typing import Any
from .settings import BASE_DIR

with open(f'{BASE_DIR}/log.yml', 'r') as f:
    conf: dict[str, Any] = safe_load(f.read())
    config.dictConfig(conf)

logger: Logger = getLogger('main')
