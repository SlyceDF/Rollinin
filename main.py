from flask import Flask, render_template, request
app = Flask(  # Create a flask app
	__name__,
	template_folder='frontend',  # Name of directory for template files
  static_folder='frontend'  # Name of directory for static files

)

@app.route('/')
def level():
  while True:
    return render_template('lvl1.html')

@app.route('/edit')
def designer():
  while True:
    return render_template('design.html')

app.run(host='0.0.0.0', port=8080)