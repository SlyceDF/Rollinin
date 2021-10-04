from flask import Flask, render_template, request, jsonify, redirect
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(  # Create a flask app
	__name__,
	template_folder='frontend',  # Name of directory for template files
  static_folder='frontend'  # Name of directory for static files

)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profiles.db'

db = SQLAlchemy(app)
class Profiles(db.Model):
  idd = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32), nullable=False)
  password = db.Column(db.String(32), nullable=False)
  def __repr__(self):
    return '<ID %r>' % self.idd

@app.route('/edit',  methods=['GET', 'POST'])
def designer():
  return render_template('design.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  global register
  register = True
  return render_template('register.html', register=register)

@app.route('/play',  methods=['GET', 'POST'])
def levelplay():
  if (request.method == 'POST'):
    if (register == True):
      uname = request.form['usernames']
      pword = request.form['passwords']
      rpword = request.form['rpasswords']
      if (pword == rpword):
        userl = Profiles.query.order_by(Profiles.idd)
        userlast = userl[-1:]
        try:
          idword = userlast.idd + 1
        except:
          idword = 0
        new_user = Profiles(username=uname, password=pword)
        db.session.add(new_user)
        db.session.commit()
        return render_template('lvl1.html', username=uname, idd=idword)
      else:
        return redirect('/register', code=302)
    else:
      if (register == False):
        try:
          uname = request.form['usernames']
          iw = int(request.form['ids'])
          pword = request.form['passwords']
          listquery = Profiles.query.order_by(Profiles.idd)[iw]
          if (listquery.password == pword and listquery.username == uname and not   listquery.password == None):
            return render_template('lvl1.html', username=uname, idd=iw)
          else:
            return redirect('/', code=302)
        except:
          return redirect('/', code=302)
  if (request.method == 'GET'):
    return redirect('/', code=302)
@app.route('/',  methods=['GET', 'POST'])
def login():
  global register
  register = False
  return render_template('login.html', register=register)

app.run(host='0.0.0.0', port=8080)