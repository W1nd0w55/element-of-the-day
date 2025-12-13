from flask import Flask
from .endpoints import get_element_num, get_element_info
from . import settings

app = Flask(str(settings.BASE_DIR))
app.config.from_object(settings)
app.add_url_rule('/num', view_func=get_element_num)
app.add_url_rule('/info', view_func=get_element_info)
