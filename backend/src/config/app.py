from flask import Flask
from endpoints import example

app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.add_url_rule('/', view_func=example.example)
