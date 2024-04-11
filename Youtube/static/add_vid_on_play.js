/*<div class="side-video-list">
    <a href="" class="small-thumbnail">
        <img src="images/thumbnail1.png" />
    </a>
    <div class="vid-info">
      <a href="">Best Channel that help you to be a web developer</a>
      <p>Esy Tutrials</p>
      <p>15k views</p>
    </div>
  </div> */

var list_container = document.getElementsByClassName("right-sidebar")[0];

video_list = [
  {
    thumbnail: "https://i.ytimg.com/vi/kKvK2foOTJM/hq720.jpg",
    title:
      "Brain Hack: 6 secrets to learning faster, backed by neuroscience | Lila Landowski | TEDxHobart",
    channel_name: "TEDx Talks",
    channel_icon: "TEDx Talks",
    channel_url: "https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q",
    views: "1M",
    upload_date: "3 months ago",
    video: "https://www.youtube.com/embed/kKvK2foOTJM",
    length: "18 : 18",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/UOGu_CLGvnM/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYciBSKDowDw==&rs=AOn4CLB72HaYKnAUnB_q8wFK7OJvuF7L_Q",
    title: "Cube Robot Can’t Solve This Scramble! 🤯",
    channel_name: "CubeHead",
    channel_icon: "CubeHead",
    channel_url: "https://www.youtube.com/channel/UC9wvQsn9VGQsX9uFWEuQW4A",
    views: "37M",
    upload_date: "3 months ago",
    video: "https://www.youtube.com/embed/UOGu_CLGvnM",
    length: "00 : 46",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/SGP6Y0Pnhe4/hqdefault.jpg?sqp=-oaymwEXCJADEOABSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCGdZIRvN7Lamv0wvVV9TDxOimTyw",
    title: "HOW IT WORKS: The International Space Station",
    channel_name: "DOCUMENTARY TUBE",
    channel_icon: "DOCUMENTARY TUBE",
    channel_url: "https://www.youtube.com/channel/UC_sXrcURB-Dh4az_FveeQ0Q",
    views: "107M",
    upload_date: "8 year ago",
    video: "https://www.youtube.com/embed/SGP6Y0Pnhe4",
    length: "28 : 58",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/o3Qaz5H0Yzg/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBcKEYwDw==&rs=AOn4CLD_EGfbM9WVcM5lK-syQ-0cREMoLg",
    title: "Fascinating Facts About World War 2 #shorts #history",
    channel_name: "History Bypass",
    channel_icon: "History Bypass",
    channel_url: "https://www.youtube.com/channel/UCNAek4srjvZvjptytiH99bA",
    views: "2M",
    upload_date: "1 months ago",
    video: "https://www.youtube.com/embed/o3Qaz5H0Yzg",
    length: "01 : 00",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/BhK0nlAdA_k/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBPKE8wDw==&rs=AOn4CLDxxHOJne_IMq54M9_CLzgTp8dIag",
    title: "Crazy Facts About History’s World Leaders #shorts #history",
    channel_name: "History Bypass",
    channel_icon: "History Bypass",
    channel_url: "https://www.youtube.com/channel/UCNAek4srjvZvjptytiH99bA",
    views: "1M",
    upload_date: "1 months ago",
    video: "https://www.youtube.com/embed/BhK0nlAdA_k",
    length: "01 : 00",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/uSLysoVgiRU/hq720.jpg",
    title: "MAKE JOKE OF ||MJO|| - AN IPL DISCUSSION",
    channel_name: "Make Joke Of",
    channel_icon: "Make Joke Of",
    channel_url: "https://www.youtube.com/channel/UCvgteBQjoaxE0bhFkpu8qAw",
    views: "25M",
    upload_date: "5 year ago",
    video: "https://www.youtube.com/embed/uSLysoVgiRU",
    length: "5 : 43",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/6WW6d5YIsko/hq720.jpg",
    title: "I Hired 100 People To Laugh At My Bad Jokes",
    channel_name: "NDL",
    channel_icon: "NDL",
    channel_url: "https://www.youtube.com/channel/UC9K44RtwiROAwCpALm1wdyQ",
    views: "2M",
    upload_date: "3 months ago",
    video: "https://www.youtube.com/embed/6WW6d5YIsko",
    length: "15 : 15",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/rm9IJg5H8fo/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYJCATKH8wDw==&rs=AOn4CLC2ydTqxk8ngnyf0rcBPQ2MZ8CxHw",
    title: "When British Ruled India For The First Time😂",
    channel_name: "Leaders Talk",
    channel_icon: "Leaders Talk",
    channel_url: "https://www.youtube.com/channel/UCf-w_9RCURkdMcIMI8OlalA",
    views: "61M",
    upload_date: "1 year ago",
    video: "https://www.youtube.com/embed/rm9IJg5H8fo",
    length: "00 : 58",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/5MgBikgcWnY/hq720.jpg",
    title:
      "The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU",
    channel_name: "TEDx Talks",
    channel_icon: "TEDx Talks",
    channel_url: "https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q",
    views: "35M",
    upload_date: "10 year ago",
    video: "https://www.youtube.com/embed/5MgBikgcWnY",
    length: "19 : 27",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/WNeLUngb-Xg/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLDKm6-emQXiqsWO8ArPdE3w_Ms5JQ",
    title: "Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix)",
    channel_name: "TrapMusicHDTV",
    channel_icon: "TrapMusicHDTV",
    channel_url: "https://www.youtube.com/channel/UCaB_KyYOjfNHBm0f-TvBmiw",
    views: "1B",
    upload_date: "5 year ago",
    video: "https://www.youtube.com/embed/WNeLUngb-Xg",
    length: "3 : 39",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/h1CqzntEZZ8/hq720.jpg",
    title:
      "A homeless teen meets a deaf-blind man who changes his life forever. | Feeling Through",
    channel_name: "Omeleto",
    channel_icon: "Omeleto",
    channel_url: "https://www.youtube.com/channel/UCTMt7iMWa7jy0fNXIktwyLA",
    views: "5M",
    upload_date: "2 year ago",
    video: "https://www.youtube.com/embed/h1CqzntEZZ8",
    length: "18 : 26",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/n8JP9PfSREo/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLDbo80uZ0VHfpR9GzsfGBhiZSW5Gg",
    title: "Russian Rocket Gets Hit by Lightning and Keeps Going #shorts",
    channel_name: "Hazegrayart",
    channel_icon: "Hazegrayart",
    channel_url: "https://www.youtube.com/channel/UCh2dnrLCNHDS2IV9I2R58Pw",
    views: "7M",
    upload_date: "1 year ago",
    video: "https://www.youtube.com/embed/n8JP9PfSREo",
    length: "00 : 57",
  },
];
function video_add(list) {
  let a1 = document.createElement("a");
  a1.setAttribute("class", "small-thumbnail"); //Set class for a-tag
  let img1 = document.createElement("img");
  img1.setAttribute("src", list["thumbnail"]);
  let p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(list["length"]));
  p1.setAttribute("style", "background:rgba(0,0,0,0.8);color:#fff");
  a1.appendChild(img1);
  a1.appendChild(p1);
  //MAIN_appending first part

  let div1 = document.createElement("div");
  div1.setAttribute("class", "vid-info");
  let a2 = document.createElement("a");
  a2.setAttribute("class", "color-make-white");
  let node = document.createTextNode(list["title"]);
  a2.appendChild(node);
  p1 = document.createElement("p");
  node = document.createTextNode(list["channel_name"]);
  p1.appendChild(node);
  let p2 = document.createElement("p");
  node = document.createTextNode(
    list["views"] + " views • " + list["upload_date"]
  );
  p2.appendChild(node);

  div1.appendChild(a2);
  div1.appendChild(p1);
  div1.appendChild(p2);

  let main_div = document.createElement("div");
  main_div.setAttribute("class", "side-video-list");
  main_div.setAttribute("title", list["title"]);
  main_div.setAttribute("views", list["views"]);
  main_div.setAttribute("length", list["length"]);
  main_div.setAttribute("upload_date", list["upload_date"]);
  main_div.setAttribute("channel", list["channel_name"]);
  main_div.setAttribute("title", list["title"]);
  main_div.setAttribute("embed", list["video"]);

  main_div.appendChild(a1);
  main_div.appendChild(div1);

  list_container.appendChild(main_div);
}

for (let i of video_list) {
  video_add(i);
}

all_video = document.querySelectorAll(".side-video-list");
for (let i of all_video) {
  i.addEventListener("click", () => {
    localStorage.setItem("title", i.getAttribute("title")); //setting the title
    localStorage.setItem("channel", i.getAttribute("channel")); //setting the channel
    localStorage.setItem("video", i.getAttribute("embed")); //setting the embed video
    localStorage.setItem(
      "views",
      i.getAttribute("views") + " •" + i.getAttribute("upload_date")
    ); //setting the channel
    // window.open("templates/play-video-1.html", "_self");
    window.location.href = "play-video";
  });
}

for (let i of document.getElementsByClassName("color-make-white")) {
  i.style.color = "#fff"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
}
