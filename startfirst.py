bashCommand = "pip install flask-sqlalchemy"
import subprocess
process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
output, error = process.communicate()

from flask import Flask, render_template, request, jsonify, redirect
import sqlite3
from flask_sqlalchemy import SQLAlchemy

app = Flask(  # Create a flask app
	__name__,
	template_folder='frontend',  # Name of directory for template files
  static_folder='frontend'  # Name of directory for static files

)

db = SQLAlchemy(app)
class Profiles(db.Model):
  idd = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32), nullable=False)
  password = db.Column(db.String(32), nullable=False)
  def __repr__(self):
    return '<ID %r>' % self.idd

db.create_all()

exec(open("main.py").read())