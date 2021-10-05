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

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profiles.db'

db = SQLAlchemy(app)
class Profiles(db.Model):
  idd = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(32), nullable=False)
  password = db.Column(db.String(32), nullable=False)
  def __repr__(self):
    return '<ID %r>' % self.idd

#db.create_all()

@app.route('/edit',  methods=['GET', 'POST'])
def designer():
  return render_template('design.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  global register
  register = 1
  return render_template('register.html', register=register)

@app.route('/delac', methods=['GET', 'POST'])
def delac():
  global register
  register = 2
  return render_template('deleteacc.html', register=register)

@app.route('/play',  methods=['GET', 'POST'])
def levelplay():
  if (not request.method == 'GET'):
    try:
      if (register == 1):
        uname = request.form['usernames']
        pword = request.form['passwords']
        rpword = request.form['rpasswords']
        if (pword == rpword):
          userlast = Profiles.query.order_by(Profiles.idd)
          try:
            idword = userlast[-1].idd
          except:
            idword = 0
          new_user = Profiles(username=uname, password=pword)
          db.session.add(new_user)
          db.session.commit()
          return render_template('lvl1.html', username=uname, idd=idword)
        else:
          return redirect('/register', code=302)
      else:
        if (register == 0):
          try:
            uname = request.form['usernames']
            iw = int(request.form['ids'])
            pword = request.form['passwords']
            listquery = Profiles.query.order_by(Profiles.idd)[iw]
            if (listquery.password == pword and listquery.username == uname and not   listquery.password == None):
              return render_template('lvl1.html', username=uname, idd=iw)
            else:
              return redirect('/login', code=302)
          except:
            return redirect('/login', code=302)
        else:
          if (register == 2):
              uname = request.form['usernames']
              iw = int(request.form['ids'])
              pword = request.form['passwords']
              listquery = Profiles.query.order_by(Profiles.idd)[iw]
              if (listquery.password == pword and listquery.username == uname):
                db.session.delete(listquery)
                db.session.commit()
                return redirect('/delac', code=302)
              else:
                return redirect('/delac', code=302)
    except:
      return redirect('/', code=302)
  else: 
    return redirect('/', code=302)
@app.route('/login',  methods=['GET', 'POST'])
def login():
  global register
  register = 0
  return render_template('login.html', register=register)

@app.route('/',  methods=['GET', 'POST'])
def menu():
  return render_template('menu.html')

app.run(host='0.0.0.0', port=8080)