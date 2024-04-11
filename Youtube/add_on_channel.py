from youtubesearchpython import Channel, Playlist, playlist_from_channel_id
from pytube import YouTube

upper = '''var list_container = document.getElementsByClassName("container")[0];

function top_bar() {
  var top = document.createElement("div");
  top.setAttribute("class", "top");

  var banner = document.createElement("div");
  banner.setAttribute("class", "banner");
  var img = document.createElement("img");
  img.setAttribute("src","%s");
  // link["banner"] up here
  banner.appendChild(img);

  var title = document.createElement("div");
  title.setAttribute("class", "title");
  img = document.createElement("img");
  img.setAttribute("src","%s");
  img.setAttribute("id","channel_icon");

  var content = document.createElement("div");
  content.setAttribute("class", "content");
  var h2 = document.createElement("h2");
  h2.setAttribute("title", "%s"); //here will be the ,,, link["title"]
  document.title = "%s";
  h2.appendChild(document.createTextNode("%s")); //here will be the ,,, link["title"]

  var p = document.createElement("p");
  var strong = document.createElement("strong");
  strong.appendChild(document.createTextNode("@%s")); //append here
  p.appendChild(strong);
  p.appendChild(
    document.createTextNode("&nbsp; %s subscribers&nbsp;1.3k videos")
  ); //append here

  var p1 = document.createElement("p");
  p1.appendChild(
    document.createTextNode(
      `%s`
    )
  ); //description here
  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(p1);
  var subscribe = document.createElement("div");
  subscribe.setAttribute("class", "subscribe");
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Subscribe"));
  subscribe.appendChild(button);

  title.appendChild(img);
  title.appendChild(content);
  title.appendChild(subscribe);
  top.appendChild(banner);
  top.appendChild(title);
  list_container.appendChild(top);
}

function middle_bar() {
  var middle = document.createElement("div");
  middle.setAttribute("class", "middle");

  var button1 = document.createElement("button");
  button1.setAttribute("num", "1");
  button1.appendChild(document.createTextNode("HOME"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "2");
  button1.appendChild(document.createTextNode("VIDEOS"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "3");
  button1.appendChild(document.createTextNode("SHORTS"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "3");
  button1.appendChild(document.createTextNode("LIVE"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "5");
  button1.appendChild(document.createTextNode("PLAYLISTS"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "3");
  button1.appendChild(document.createTextNode("COMMUNITY"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "3");
  button1.appendChild(document.createTextNode("CHANNELS"));
  middle.appendChild(button1);

  button1 = document.createElement("button");
  button1.setAttribute("num", "8");
  button1.appendChild(document.createTextNode("ABOUT"));
  middle.appendChild(button1);

  list_container.appendChild(middle);
  list_container.appendChild(document.createElement("hr"));
}

function about() {
  // <div class="about slidebar" num="8">
  //     <div class="left">
  //       <h4>Description</h4>
  //       <p>
  //         This is Abhyudaya and Gautami, two school friends, who together make
  //         fun videos on millennial friendly topics 😁 SUBSCRIBE and hit the
  //         bell icon! FOLLOW US ON SOCIAL MEDIA Business enquiries :-
  //         slayypointofficial@gmail.com
  //       </p>
  //       <hr />
  //       <h4>Details</h4>
  //       <p>Location : Pluto</p>
  //     </div>
  //     <div class="right">
  //       <h4>Stats</h4>
  //       <hr />
  //       <p>Joined March 14</p>
  //       <hr />
  //       <p>123050 Views</p>
  //       <hr />
  //       <div>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke-width="1.5"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
  //           />
  //         </svg>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke-width="1.5"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
  //           />
  //         </svg>
  //       </div>
  //     </div>
  //   </div>

  var about = document.createElement("div");
  about.setAttribute("class", "about slidebar");
  about.setAttribute("num", "8");

  var left = document.createElement("div");
  left.setAttribute("class", "left");
  var h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode("Description"));
  left.appendChild(h4);
  var p1 = document.createElement("p");
  p1.appendChild(
    document.createTextNode(
      `%s`
    )
  );
  left.appendChild(p1);
  left.appendChild(document.createElement("hr"));
  h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode("Details"));
  left.appendChild(h4);
  p1 = document.createElement("p");
  p1.appendChild(document.createTextNode("Location : %s"));
  left.appendChild(p1);

  var right = document.createElement("div");
  right.setAttribute("class", "right");
  h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode("Stats"));
  right.appendChild(h4);
  right.appendChild(document.createElement("hr"));

  p1 = document.createElement("p1");
  p1.appendChild(document.createTextNode("Joined : %s"));
  right.appendChild(p1);
  right.appendChild(document.createElement("hr"));
  p1 = document.createElement("p1");
  p1.appendChild(document.createTextNode("%s"));
  right.appendChild(p1);
  right.appendChild(document.createElement("hr"));

  about.appendChild(left);
  about.appendChild(right);
  list_container.appendChild(about);
}


function home_bar() {
  // <div class="home slidebar" num="1">
  //     <div class="featured" embed="">
  //       <div class="img">
  //         <img src=""/>
  //       </div>
  //
  //       <div class="content">
  //         <p title="Delhi Metro is TOO WILD">Delhi Metro is TOO WILD</p>
  //         <p >5.5M views • 2 weeks ago</p>
  //         <p title="From Video description" >
  //           Indian Metros are out of control. Kuch bhi ho raha hai from
  //           brushing, dancing, singing, fighting to kissing. Kabhi bhi
  //           timepass&nbsp;...
  //         </p>
  //       </div>
  //     </div>

  //     <h2> Popular videos
  //       <div>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke-width="1.5"
  //           stroke="currentColor"
  //           class="w-6 h-6">
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
  //         </svg>
  //         <p>&nbsp;Play All</p>
  //       </div>
  //     </h2>

  //     <div class="play-list">
  //       <a href="">
  //          <img src="https://i.ytimg.com/vi/NVXgPsK_eTw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw5AXFSQpmz880uheJagb5y9PjpQ" alt=""/>
  //          <h4>Title</h4>
  //          <p>uploaded time</p>
  //       </a>
  //     </div>
  //   </div>

  var home = document.createElement("div");
  home.setAttribute("num", "1");
  home.setAttribute("class", "home slidebar");

  var featured = document.createElement("div");
  featured.setAttribute("class", "featured");
  featured.setAttribute("embed", "%s");
  var div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  var img = document.createElement("iframe");
  img.setAttribute("src","%s");
  div_img.appendChild(img);
  featured.appendChild(div_img); //append one done

  var content = document.createElement("div");
  content.setAttribute("class", "content");

  var p1 = document.createElement("p");
  p1.setAttribute("title", "%s");
  p1.appendChild(document.createTextNode("%s"));
  content.appendChild(p1);

  p1 = document.createElement("p");
  p1.appendChild(document.createTextNode("%s views • 2 weeks ago"));
  content.appendChild(p1);

  var p1 = document.createElement("p");
  p1.setAttribute("title", "From Video description");
  p1.appendChild(document.createTextNode(`%s`));
  content.appendChild(p1);

  featured.appendChild(content);

  var h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Popular videos"));
  var div = document.createElement("div");
  var p_div = document.createElement("p");
  p_div.appendChild(document.createTextNode(" Play All"));
  div.appendChild(p_div);
  h2.appendChild(div);

  // FOR THIS THING A NEW FUNCTION SHOUDL BE MADE ------VERY IMPORTANT
  var play_list = document.createElement("div");
  play_list.setAttribute("class", "play-list");
  var a_playlist = document.createElement("a");
  var a_img = document.createElement("img");
  a_img.setAttribute(
    "src",
    "https://i.ytimg.com/vi/NVXgPsK_eTw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw5AXFSQpmz880uheJagb5y9PjpQ"
  );
  var h4_playlist = document.createElement("h4");
  h4_playlist.appendChild(document.createTextNode("Title"));
  var p_playlist = document.createElement("p");
  p_playlist.appendChild(document.createTextNode("uploaded time"));
  a_playlist.appendChild(a_img);
  a_playlist.appendChild(h4_playlist);
  a_playlist.appendChild(p_playlist);
  play_list.appendChild(a_playlist);

  home.appendChild(featured);
  home.appendChild(h2);
  home.appendChild(play_list);
  list_container.appendChild(home);
}

function progress() {
  // <div class="to_make slidebar" num="3">
  //     <img src="static/images/progress.png" alt="" />
  //     <h4>Sorry For the inconvienience but ,This part is in progress</h4>
  //   </div>
  var to_make = document.createElement("div");
  to_make.setAttribute("class", "to_make slidebar");
  to_make.setAttribute("num", "3");

  var img = document.createElement("img");
  img.setAttribute("src", "static/images/progress.png");
  var h4 = document.createElement("h4");
  h4.appendChild(
    document.createTextNode(
      "Sorry For the inconvienience but ,This part is in progress"
    )
  );
  to_make.appendChild(img);
  to_make.appendChild(h4);
  list_container.appendChild(to_make);
}
top_bar();
middle_bar();
about();
home_bar();
progress();

var video = document.createElement("div");
video.setAttribute("class", "videos slidebar");
video.setAttribute("num", "2");

var butt = document.createElement("button")
butt.setAttribute("class","vid-button")
butt.addEventListener("click", () => {
  refresh_video_page();
});
butt.appendChild(document.createTextNode("Load More"))
list_container.appendChild(video);
list_container.appendChild(butt);

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

  let div2 = document.createElement("div");
  div2.setAttribute("class", "vid-info");
  let a2 = document.createElement("a");
  let a_text = document.createTextNode(list["title"]); //Set the title of video
  a2.setAttribute("href", "play-video.html"); //link of the video, but for now this is
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
  main_div.addEventListener("click",()=>{
    localStorage.setItem("title", list[`title`]); //setting the title
    localStorage.setItem("channel", list["channel_name"]); //setting the channel
    localStorage.setItem("video", list["video"]); //setting the embed video
    localStorage.setItem("views", list["views"]+" • "+list["upload_date"]);
    localStorage.setItem("desc", "none");
    localStorage.setItem("icon",document.getElementById("channel_icon").getAttribute("src"));
    window.location.href = "play-video";

  });
  video.appendChild(main_div);
}


function vid_to_add(object) {
  if (!ranker.includes(object.rank)) {
    video_add(object);
    ranker.push(object.rank);
  }
}

'''


def time_cal(date):
    CURRENT_YEAR = "2023"
    CURRENT_MONTH = "08"
    TODAY_DATE = "22"
    f = open("p.txt", 'w')
    date = date.split("-")
    f.write(str(date))
    if date[0].strip() == CURRENT_YEAR:
        if date[1].strip() == CURRENT_MONTH:
            return str(int(TODAY_DATE)-int(date[-1])) + " days ago"
        else:
            return str(int(CURRENT_MONTH) - int(date[1])) + " months ago"
    else:
        return str(int(CURRENT_YEAR) - int(date[0])) + " year ago"


def views_cal(num):
    num = str(num)
    if len(num) > 9:
        return num[0:len(num)-9]+"B views"
    elif len(num) > 6:
        return num[0:len(num)-6]+"M views"
    elif len(num) > 3:
        return num[0:len(num)-3]+"K views"
    else:
        return num + "views"


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


def channel_maker(CHHANEL_ID):
    channel = Channel.get(CHHANEL_ID)
    banner = channel["banners"][-1]['url']
    title = channel["title"]
    description = channel["description"]
    subscribers = channel["subscribers"]["simpleText"]  # 33.5M subscribers
    subscribers1 = channel["subscribers"]["label"]  # 33.5 million subscribers
    thumbnails = channel["thumbnails"][-1]['url']
    views = channel["views"]
    joined_date = channel["joinedDate"]
    country = channel["country"]

    playlist = Playlist(playlist_from_channel_id(CHHANEL_ID))
    video = (playlist.videos[0])
    video1 = YouTube(video['link'])
    embed = video1.embed_url

    vid_title = video['title']
    vid_views = views_cal(video1.views)
    vid_description = video1.description

    f = open("static/add_vid_on_channel_main.js", 'w', encoding='utf-8')
    f.write(upper % (banner, thumbnails, title, title, title, title, subscribers, description[0:120]+'...', description,
            country, joined_date, views, embed, embed, vid_title, vid_title, vid_views, description))


def channel_video(CHHANEL_ID):
    playlist = Playlist(playlist_from_channel_id(CHHANEL_ID))
    k = 0
    for i in playlist.videos:
        f = open("static/channel_vid_list.js", 'a', encoding='utf-8')
        yt = YouTube(i["link"])
        main = '''vid_to_add({
        thumbnail: "%s",
        title: "%s",
        channel_name: "%s",
        channel_icon: "%s",
        channel_url: "%s",
        views: "%s",
        upload_date: "%s",
        video: "%s",
        length: "%s",
        rank: %s,
      });\n''' % (yt.thumbnail_url, yt.title, yt.author, yt.author, yt.channel_url, views_cal(yt.views), time_cal(str(yt.publish_date)[0:10]), yt.embed_url, length(yt.length), k)

        f.write(main)
        f.close()
        k += 1
