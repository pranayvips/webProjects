from flask import Flask, render_template
from threading import Thread
from search_add import search_adder
from add_on_channel import channel_maker, channel_video
from home_vid_maker import Home_screen_maker
app = Flask(__name__)

Thread(target=Home_screen_maker).start()


@app.route('/')
def homepage():
    Thread(target=Home_screen_maker).start()
    return render_template('index.html')


@app.route('/home')
def come_homepage():
    Thread(target=Home_screen_maker).start()
    return render_template('index.html')


@app.route("/play-video")
def play_video_page():
    return render_template("play-video-1.html")


@app.route("/play-video.v=<val>")
def play_video_page_1(val):
    with open("vid.txt", "a") as f:
        val = str(val)[1:-1]
        f.write(',,https://www.youtube.com/watch?v='+str(val))
    return render_template("play-video-1.html")


@app.route("/search-result")
def search_page():
    return render_template("search_result.html")


@app.route("/channel<val>")
def channel(val):
    global CHANNEL_THREAD
    val = str(val)[1:-1]
    channel_maker(val)
    open("static/channel_vid_list.js", 'w').close()
    try:
        print("\n\n\nin\n\n\n")
        CHANNEL_THREAD.join()
        print("\n\n\nout\n\n\n")
    except:
        pass
    CHANNEL_THREAD = Thread(target=channel_video, args=(val,))
    CHANNEL_THREAD.start()
    return render_template("channel.html")


@app.route("/search_for_q=<value>")
def abc(value):
    val = str(value)[1:-1]
    search_adder(val)
    return render_template("search_result.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, port=8000)
