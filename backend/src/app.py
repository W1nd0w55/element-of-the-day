from flask import Flask
from endpoints import example
import settings

app = Flask(str(settings.BASE_DIR))
app.config.from_object(settings)
app.add_url_rule('/', view_func=example.example)
