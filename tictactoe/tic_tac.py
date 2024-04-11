from flask import Flask, render_template,make_response
from json import loads

app = Flask(__name__)

old_data = [""]

@app.route('/')
def index():
    return render_template('tictactoe.html')


@app.route('/<string:data>', methods=['GET', 'POST'])
def process(data):
    if "name" in data:
        with open("user.txt","w") as f:
            f.write(data+";;;")
        return ""
    elif data!='"to"':
        data=loads(data)
        with open("msg.txt","a",encoding="utf-8") as f:
            f.write(data+'/;/')
        return ""
    else:
        with open("msg.txt","r") as f:
            data = f.read()
            return make_response(data)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
