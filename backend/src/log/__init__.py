from logging import config
from yaml import safe_load
from typing import Any

with open('src/log/config.yml', 'r') as f:
    conf: dict[str, Any] = safe_load(f.read())
    config.dictConfig(conf)
