from flask import Flask, render_template, request, jsonify, redirect
import sqlite3
from flask_sqlalchemy import SQLAlchemy

db.create_all()

exec(open("main.py").read())