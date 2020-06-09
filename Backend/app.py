from flask import Flask , request
from flaskext.mysql import MySQL
import config
mysql = MySQL()
app = Flask(__name__)
mysql.init_app(app)


@app.route('/', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         details = request.form
#         firstName = details['fname']
#         lastName = details['lastname']
#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO MyUsers(firstName , lastName) VALUES (%s, %s)" (firstName , lastName))
#         mysql.connection.commit()
#         cur.close()
#         return "Success"

def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)
