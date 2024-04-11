
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

video_list = [{
        thumbnail: "https://i.ytimg.com/vi/kKvK2foOTJM/hq720.jpg",
        title: "Brain Hack: 6 secrets to learning faster, backed by neuroscience | Lila Landowski | TEDxHobart",
        channel_name: "TEDx Talks",
        channel_icon: "TEDx Talks",
        channel_url: "https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q",
        views: "1M",
        upload_date: "3 months ago",
        video: "https://www.youtube.com/embed/kKvK2foOTJM",
        length: "18 : 18",
      },
{
        thumbnail: "https://i.ytimg.com/vi/BhK0nlAdA_k/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBPKE8wDw==&rs=AOn4CLDxxHOJne_IMq54M9_CLzgTp8dIag",
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
        thumbnail: "https://i.ytimg.com/vi/FkKPsLxgpuY/hq720.jpg",
        title: "I Took an IQ Test to Find Out What it Actually Measures",
        channel_name: "Veritasium",
        channel_icon: "Veritasium",
        channel_url: "https://www.youtube.com/channel/UCHnyfMqiRRG1u-2MsSQLbXA",
        views: "4M",
        upload_date: "0 months ago",
        video: "https://www.youtube.com/embed/FkKPsLxgpuY",
        length: "34 : 28",
      },
{
        thumbnail: "https://i.ytimg.com/vi/gLGcgEImtGo/hq720.jpg",
        title: "How Foreigners Show India",
        channel_name: "Slayy Point",
        channel_icon: "Slayy Point",
        channel_url: "https://www.youtube.com/channel/UCtgGOdTlM-NdJ9rPKIYN8UQ",
        views: "6M",
        upload_date: "-1 months ago",
        video: "https://www.youtube.com/embed/gLGcgEImtGo",
        length: "13 : 36",
      },
{
        thumbnail: "https://i.ytimg.com/vi/UOGu_CLGvnM/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYciBSKDowDw==&rs=AOn4CLB72HaYKnAUnB_q8wFK7OJvuF7L_Q",
        title: "Cube Robot Can’t Solve This Scramble! 🤯",
        channel_name: "CubeHead",
        channel_icon: "CubeHead",
        channel_url: "https://www.youtube.com/channel/UC9wvQsn9VGQsX9uFWEuQW4A",
        views: "45M",
        upload_date: "3 months ago",
        video: "https://www.youtube.com/embed/UOGu_CLGvnM",
        length: "00 : 46",
      },
{
        thumbnail: "https://i.ytimg.com/vi/n8JP9PfSREo/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLDbo80uZ0VHfpR9GzsfGBhiZSW5Gg",
        title: "Russian Rocket Gets Hit by Lightning and Keeps Going #shorts",
        channel_name: "Hazegrayart",
        channel_icon: "Hazegrayart",
        channel_url: "https://www.youtube.com/channel/UCh2dnrLCNHDS2IV9I2R58Pw",
        views: "7M",
        upload_date: "1 year ago",
        video: "https://www.youtube.com/embed/n8JP9PfSREo",
        length: "00 : 57",
      },
{
        thumbnail: "https://i.ytimg.com/vi/gLGcgEImtGo/hq720.jpg",
        title: "How Foreigners Show India",
        channel_name: "Slayy Point",
        channel_icon: "Slayy Point",
        channel_url: "https://www.youtube.com/channel/UCtgGOdTlM-NdJ9rPKIYN8UQ",
        views: "6M",
        upload_date: "-1 months ago",
        video: "https://www.youtube.com/embed/gLGcgEImtGo",
        length: "13 : 36",
      },
{
        thumbnail: "https://i.ytimg.com/vi/5MgBikgcWnY/hq720.jpg",
        title: "The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU",
        channel_name: "TEDx Talks",
        channel_icon: "TEDx Talks",
        channel_url: "https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q",
        views: "36M",
        upload_date: "10 year ago",
        video: "https://www.youtube.com/embed/5MgBikgcWnY",
        length: "19 : 27",
      },
{
        thumbnail: "https://i.ytimg.com/vi/rm9IJg5H8fo/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYJCATKH8wDw==&rs=AOn4CLC2ydTqxk8ngnyf0rcBPQ2MZ8CxHw",
        title: "When British Ruled India For The First Time😂",
        channel_name: "Leaders Talk",
        channel_icon: "Leaders Talk",
        channel_url: "https://www.youtube.com/channel/UCf-w_9RCURkdMcIMI8OlalA",
        views: "68M",
        upload_date: "1 year ago",
        video: "https://www.youtube.com/embed/rm9IJg5H8fo",
        length: "00 : 58",
      },
{
        thumbnail: "https://i.ytimg.com/vi/6WW6d5YIsko/hq720.jpg",
        title: "I Hired 100 People To Laugh At My Bad Jokes",
        channel_name: "NDL",
        channel_icon: "NDL",
        channel_url: "https://www.youtube.com/channel/UC9K44RtwiROAwCpALm1wdyQ",
        views: "3M",
        upload_date: "3 months ago",
        video: "https://www.youtube.com/embed/6WW6d5YIsko",
        length: "15 : 15",
      },
{
        thumbnail: "https://i.ytimg.com/vi/SGP6Y0Pnhe4/hqdefault.jpg?sqp=-oaymwEXCJADEOABSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCGdZIRvN7Lamv0wvVV9TDxOimTyw",
        title: "HOW IT WORKS: The International Space Station",
        channel_name: "DOCUMENTARY TUBE",
        channel_icon: "DOCUMENTARY TUBE",
        channel_url: "https://www.youtube.com/channel/UC_sXrcURB-Dh4az_FveeQ0Q",
        views: "110M",
        upload_date: "8 year ago",
        video: "https://www.youtube.com/embed/SGP6Y0Pnhe4",
        length: "28 : 58",
      },
{
        thumbnail: "https://i.ytimg.com/vi/WNeLUngb-Xg/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLDKm6-emQXiqsWO8ArPdE3w_Ms5JQ",
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
        thumbnail: "https://i.ytimg.com/vi/o3Qaz5H0Yzg/hq720_2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBcKEYwDw==&rs=AOn4CLD_EGfbM9WVcM5lK-syQ-0cREMoLg",
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
        thumbnail: "https://i.ytimg.com/vi/h1CqzntEZZ8/hq720.jpg",
        title: "A homeless teen meets a deaf-blind man who changes his life forever. | Feeling Through",
        channel_name: "Omeleto",
        channel_icon: "Omeleto",
        channel_url: "https://www.youtube.com/channel/UCTMt7iMWa7jy0fNXIktwyLA",
        views: "5M",
        upload_date: "2 year ago",
        video: "https://www.youtube.com/embed/h1CqzntEZZ8",
        length: "18 : 26",
      },
];


for (let i of video_list) {
  video_add(i);
}