from flask import Flask, render_template, request, jsonify
app = Flask(  # Create a flask app
	__name__,
	template_folder='frontend',  # Name of directory for template files
  static_folder='frontend'  # Name of directory for static files

)

@app.route('/',  methods=['GET', 'POST'])
def level():
  while True:
    return render_template('lvl1.html')

@app.route('/edit',  methods=['GET', 'POST'])
def designer():
  while True:
    return render_template('design.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  while True:
    return render_template('register.html')
  username = request.form.get('username')
  password = request.form.get('password')

app.run(host='0.0.0.0', port=8080)