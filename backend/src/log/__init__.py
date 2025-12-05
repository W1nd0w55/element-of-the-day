from logging import config
from yaml import safe_load

with open('src/log/config.yml', 'r') as f:
    conf = safe_load(f.read())
    config.dictConfig(conf)
