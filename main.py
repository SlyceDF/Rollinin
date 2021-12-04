exec(open("hashlib.py").read())
#bashCommand = "pip install flask-sqlalchemy"
#import subprocess
#process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
#output, error = process.communicate()

from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from threading import Thread
from uuid0 import UUID
import xml.etree.ElementTree as ET

app = Flask(  # Create a flask app
	__name__,
	template_folder='frontend',  # Name of directory for template files
  static_folder='frontend'  # Name of directory for static files

)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profiles.db'

db = SQLAlchemy(app)
class Profiles(db.Model):
  idd = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(1000), nullable=False)
  password = db.Column(db.String(1000), nullable=False)
  diamonds = db.Column(db.String(1000), nullable = False)
  maxpercent = db.Column(db.String(1000), nullable = False)
  def __repr__(self):
    return '<ID %r>' % self.idd

#db.create_all()

def isUUID(value):
    try:
        UUID(value, version=4)
        return True
    except ValueError:
        return False

@app.route('/sid',  methods=['GET', 'POST'])
def sid():
  return render_template('sid.html')

@app.route('/sidi',  methods=['GET', 'POST'])
def sidi():
  if (not request.method == 'GET'):
    search = []
    uname = request.form['usernames']
    find = Profiles.query.order_by('idd')
    for profile in find:
        if (profile.username == uname):
          search.append(profile.idd - 1)
    return render_template('sidi.html', searchresults=search)

@app.route('/am',  methods=['GET', 'POST'])
def am():
  return render_template('am.html')

@app.route('/edit',  methods=['GET', 'POST'])
def designer():
  return render_template('design.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  global register
  register = 1
  return render_template('register.html', register=register)

@app.route('/onlineplay', methods=['GET', 'POST'])
def onlineplay():
  return render_template('online.html')

@app.route('/postlevel', methods=['GET', 'POST'])
def postlevel():
  if (not request.method == 'GET'):
    x = 'none'
    request_data = request.get_json()
    uuid = request_data['uuid']
    layout = request_data['layout']
    colors = request_data['colors']
    iw = request_data['id'] + 1
    username = request_data['username']
    password = request_data['password']
    user = Profiles.query.get(iw)
    if (user.password == sha1(password.encode()).hexdigest() and user.username == username and isUUID(uuid)):
      tree = ET.parse('frontend/public.xml')
      root = tree.getroot()
      for level in root.findall('level'):
        if (level.attrib['id'] == uuid):
          x = level
      if(x=='none'):
        level = ET.SubElement(root, 'level', {'id': uuid, 'author': username})
        color = ET.SubElement(level, 'colors')
        color.text = colors   
        laydata = ET.SubElement(level, 'layout')
        laydata.text = layout
        tree.write('frontend/public.xml') 
    return redirect('/', code=302)

@app.route('/delevel', methods=['GET', 'POST'])
def delevel():
  return render_template('delevel.html') 

@app.route('/playan', methods=['GET', 'POST'])
def playan():
  return render_template('playan.html') 

@app.route('/onlinelevel', methods=['GET', 'POST'])
def onlinelevel():
  return render_template('onlinelevel.html') 

@app.route('/searchlevel', methods=['GET', 'POST'])
def searchlevel():
  return render_template('searchlevel.html') 

@app.route('/play2',  methods=['GET', 'POST'])
def play2():
  if (not request.method == 'GET'):
    uuid = request.form['uuids']
    tree = ET.parse('frontend/public.xml')
    root = tree.getroot()
    author = 'Unknown'
    for level in root.findall('level'):
      if (level.attrib['id'] == uuid):
        try:
          author = Profiles.query.get(int(level.attrib['author'])+1).username
        except: 
          pass
    return render_template('play2.html', uuid=uuid, author=author)

@app.route('/search',  methods=['GET', 'POST'])
def search():
  if (not request.method == 'GET'):
    search = []
    author = request.form['uuids']
    tree = ET.parse('frontend/public.xml')
    root = tree.getroot()
    for level in root.findall('level'):
        if (level.attrib['author'] == author):
          search.append(level.attrib['id'])
    return render_template('search.html', searchresults=search)

@app.route('/changpp',  methods=['GET', 'POST'])
def changpp():
  if (not request.method == 'GET'):
    uname = request.form['usernames']
    iw = int(request.form['ids']) + 1
    pword =request.form['passwords']
    npword = request.form['npasswords']
    user = Profiles.query.get(iw)
    if (user.password == sha1(pword.encode()).hexdigest() and user.username == uname):
      Profiles.query.get(iw).password = npword
      db.session.commit()
  return redirect('/changp', code=302)

@app.route('/changp', methods=['POST','GET'])
def changp():
  return render_template('changp.html')

@app.route('/changuu',  methods=['GET', 'POST'])
def changuu():
  if (not request.method == 'GET'):
    uname = request.form['usernames']
    iw = int(request.form['ids']) + 1
    pword =request.form['passwords']
    nuname = request.form['nusernames']
    user = Profiles.query.get(iw)
    if (user.password == sha1(pword.encode()).hexdigest() and user.username == uname):
      Profiles.query.get(iw).username = nuname
      db.session.commit()
  return redirect('/changu', code=302)

@app.route('/changu', methods=['POST','GET'])
def changu():
  return render_template('changu.html')

@app.route('/leveldel',  methods=['GET', 'POST'])
def leveldel():
  if (not request.method == 'GET'):
    uname = request.form['usernames']
    iw = int(request.form['ids']) + 1
    pword =request.form['passwords']
    uuid = request.form['uuids']
    user = Profiles.query.get(iw)
    if (user.password == sha1(pword.encode()).hexdigest() and user.username == uname and isUUID(uuid)):
      tree = ET.parse('frontend/public.xml')
      root = tree.getroot()
      for level in root.findall('level'):
        if (level.attrib['id'] == uuid and level.attrib['author'] == iw):
          root.remove(level)
      tree.write('frontend/public.xml')
  return redirect('/delevel', code=302)


@app.route('/delac', methods=['GET', 'POST'])
def delac():
  global register
  register = 2
  return render_template('deleteacc.html', register=register)

'''@app.route('/p',  methods=['GET', 'POST'])
def sd():
  if (not request.method == 'GET'):
    request_data = request.get_json()
    diam = request_data['dmonds']
    iw = request_data['iw']
    Profiles.query.get(iw).update({'diamonds': diam})
    db.session.commit()
    return redirect()
  else:
    return redirect('/', code=302)'''
@app.route('/play',  methods=['GET', 'POST'])
def levelplay():
  global register
  if (not request.method == 'GET'):
    try: 
      if (register == 1):
        try:
          uname = request.form['usernames']
          pword = sha1(request.form['passwords'].encode()).hexdigest()
          rpword = sha1(request.form['rpasswords'].encode()).hexdigest()
          if (pword == rpword and not pword == '' and not uname == ''):
            new_user = Profiles(username=uname, password=pword, diamonds='[]', maxpercent='[]')
            db.session.add(new_user)
            db.session.flush()
            idword = new_user.idd - 1
            db.session.commit()
            register = 0
            return render_template('lvl1.html', username=uname, idd=idword, diamonds='[]', maxpercent='[]')
          else:
            return redirect('/register', code=302)
        except:
          return redirect('/register', code=302)
      else:
        if (register == 0):
          try:
            uname = request.form['usernames']
            iw = int(request.form['ids']) + 1
            pword = sha1(request.form['passwords'].encode()).hexdigest()
            listquery = Profiles.query.get(iw)
            if (listquery.password == pword and listquery.username == uname and not   listquery.password == None):
              dia = listquery.diamonds
              max = listquery.maxpercent
              return render_template('lvl1.html', username=uname, idd=iw - 1, diamonds=dia, maxpercent = max)
            else:
              return redirect('/login', code=302)
          except:
            return redirect('/login', code=302)
        else:
          if (register == 2):
            try:
              uname = request.form['usernames']
              iw = int(request.form['ids']) + 1
              pword = sha1(request.form['passwords'].encode()).hexdigest()
              listquery = Profiles.query.get(iw)
              if (listquery.password == pword and listquery.username == uname):
                db.session.delete(listquery)
                db.session.commit()
                return redirect('/delac', code=302)
              else:
                return redirect('/delac', code=302)
            except:
              return redirect('/delac', code=302)
          else:
            return redirect('/', code=302)
    except:
      return redirect('/', code=302)
  else: 
    return redirect('/', code=302)
@app.route('/login',  methods=['GET', 'POST'])
def login():
  global register
  register = 0
  return render_template('login.html', register=register)

@app.route('/playad', methods=['GET', 'POST'])
def playad():
  if (request.method == 'POST'):
    request_data = request.get_json()
    diam = request_data['dmonds']
    iw = request_data['iw'] + 1
    try:
      listquery = Profiles.query.get(iw)
      uname = listquery.username
      listquery.diamonds = diam
      db.session.commit()
    except: pass
    return render_template('lvl1.html', username=uname, idd=iw - 1, diamonds=diam)
  else:
    return redirect('/', code=302)
@app.route('/playadsave', methods=['GET', 'POST'])
def playadsave():
  if (request.method == 'POST'):
    request_data = request.get_json()
    diam = request_data['maxpercent']
    iw = request_data['iw'] + 1
    try:
      listquery = Profiles.query.get(iw)
      uname = listquery.username
      listquery.maxpercent = diam
      db.session.commit()
    except:
      pass
    return render_template('lvl1.html', username=uname, idd=iw - 1, maxpercent=diam)
  else:
    return redirect('/', code=302)

@app.route('/keepl',  methods=['GET', 'POST'])
def keepl():
  return render_template('keeplogin.html')

@app.route('/',  methods=['GET', 'POST'])
def menu():
  return render_template('menu.html')

@app.route('/keepaliv',  methods=['GET', 'POST'])
def keepaliv():
  if (not request.method == 'GET'):
    try:
      if (sha1(request.form['passwords'].encode()).hexdigest() == '74a3852c65bcd08651093f4a07478688e432ea15'):
        return render_template('keepalive.html')
    except:
      return redirect('/login', code=302) 
  else:
    return redirect('/login', code=302)
#errorpages
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500
#run
def run():
  app.run(host='0.0.0.0',port=8080)

def keep_alive():  

    t = Thread(target=run)

    t.start()

keep_alive()