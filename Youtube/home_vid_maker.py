from pytube import YouTube
from random import shuffle

CURRENT_YEAR = "2023"
CURRENT_MONTH = "8"
TODAY_DATE = "22"


def make(link):
    yt = YouTube(link)
    main = '''{
        thumbnail: "%s",
        title: "%s",
        channel_name: "%s",
        channel_icon: "%s",
        channel_url: "%s",
        views: "%s",
        upload_date: "%s",
        video: "%s",
        length: "%s",
      },''' % (yt.thumbnail_url, yt.title, yt.author, yt.author, yt.channel_url, views(yt.views), time(str(yt.publish_date)[0:10]), yt.embed_url, length(yt.length))

    # return (main)
    return main


def views(num):
    num = str(num)
    if len(num) > 9:
        return num[0:len(num)-9]+"B"
    elif len(num) > 6:
        return num[0:len(num)-6]+"M"
    elif len(num) > 3:
        return num[0:len(num)-3]+"K"
    else:
        return num


def time(date):
    CURRENT_YEAR = "2023"
    CURRENT_MONTH = "8"
    TODAY_DATE = "22"
    date = date.split("-")
    if date[0].strip() == CURRENT_YEAR:
        if date[1].strip() == CURRENT_MONTH:
            return str(int(TODAY_DATE)-int(date[0])) + " days ago"
        else:
            return str(int(CURRENT_MONTH) - int(date[1])) + " months ago"
    else:
        return str(int(CURRENT_YEAR) - int(date[0])) + " year ago"


def length(time):
    minute = time//60
    hour = minute // 60
    if time < 60:
        return "00 : " + str(time)
    elif time == 60:
        return "01 : 00"
    elif minute < 60:
        return str(minute) + " : " + str(time % 60)
    elif hour >= 1:
        return str(hour) + str(minute/60) + str(minute/60)


all = """
var list_container = document.getElementsByClassName("list-container")[0];
function video_add(list) {
  let a1 = document.createElement("a");
  //   a1.setAttribute("href", "play-video.html"); //link of the video, but for now this is
  let img1 = document.createElement("img");
  img1.setAttribute("src", list["thumbnail"]);
  img1.setAttribute("class", "thumbnail");
  let p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(list["length"]));
  a1.appendChild(img1);
  p1.setAttribute("style", "background:rgba(0,0,0,0.8);color:#fff");
  a1.appendChild(p1);
  //MAIN_appending first part

  let div1 = document.createElement("div");
  div1.setAttribute("class", "flex-div");
  img1 = document.createElement("img");
  img1.setAttribute("src", "static/images/Jack.png"); //Source of the icon of channel
  div1.appendChild(img1);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "vid-info");
  let a2 = document.createElement("a");
  let a_text = document.createTextNode(list["title"]); //Set the title of video
  a2.setAttribute("href", "play-video.html"); //link of the video, but for now this is
  a2.appendChild(a_text);
  div2.appendChild(a2);

  a2 = document.createElement("p");
  a_text = document.createTextNode(list["channel_name"]); //Set the Channel name
  a2.setAttribute("href", "youtube.com"); //Set the link for youtube channel # like this
  a2.setAttribute("class", "channel");
  a2.appendChild(a_text);
  div2.appendChild(a2);

  a2 = document.createElement("p");
  a_text = document.createTextNode(list["views"] + " • " + list["upload_date"]); //The date of video and views
  a2.appendChild(a_text);
  div2.appendChild(a2);

  div1.appendChild(div2);

  let main_div = document.createElement("div");
  main_div.setAttribute("class", "vid-list");
  main_div.appendChild(a1);
  main_div.appendChild(div1);

  main_div.setAttribute("embed", list["video"]);
  list_container.appendChild(main_div);
}

%s


for (let i of video_list) {
  video_add(i);
}"""


def Home_screen_maker():
    with open("vid.txt", 'r') as f:
        List = f.read().split(",,")

    shuffle(List)
    c = 'video_list = ['
    for i in List:
        c += make(i)+'\n'
    c += "];"
    with open("static/add_vid_on_home.js", 'w', encoding='utf-8') as f:
        f.write(all % (c))


# print(yt.thumbnail_url)
# print(yt.title)
# print(yt.author)
# print(yt.channel_url)
# print(yt.views)
# print(yt.publish_date)
