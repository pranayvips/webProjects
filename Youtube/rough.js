var list_container = document.getElementsByClassName("list-container")[0];

function video_add(list) {
  let vid_list_container = document.createElement("div"); //CONTAIN ALL
  vid_list_container.setAttribute("class", "vid-list");
  vid_list_container.setAttribute("embed", list["video"]);

  let div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  let img1 = document.createElement("img");
  img1.setAttribute("src", list["thumbnail"]);
  div_img.appendChild(img1); //container 1

  let div_content = document.createElement("div"); //container 2
  div_content.setAttribute("class", "content");
  let p1 = document.createElement("p"); //to add
  p1.appendChild(document.createTextNode(list["title"]));
  p1.setAttribute("title", list["title"]);
  p1.setAttribute("class", "color-make-white");
  let p2 = document.createElement("p"); //to add
  p2.appendChild(
    document.createTextNode(list["views"] + " • " + list["upload_date"])
  );
  p2.setAttribute("class", "desc-content-color");

  let div = document.createElement("div"); //in continaer
  let img2 = document.createElement("img");
  img2.setAttribute("src", list["channel_icon"]);
  let p3 = document.createElement("a");
  p3.appendChild(document.createTextNode(list["channel_name"]));
  p3.setAttribute("title", list["channel_name"]);
  p3.setAttribute("class", "desc-content-color");

  let p4 = document.createElement("p");
  p4.appendChild(document.createTextNode(list["description"]));
  p4.setAttribute("title", "From Video description");
  p4.setAttribute("class", "desc-content-color");

  div.appendChild(img2);
  div.appendChild(p3);

  div_content.appendChild(p1);
  div_content.appendChild(p2);
  div_content.appendChild(div);
  div_content.appendChild(p4);
  vid_list_container.appendChild(div_img);
  vid_list_container.appendChild(div_content);

  list_container.appendChild(vid_list_container);
}

function channel_add(list) {
  // {
  //   type: "channel",
  //   thumbnail: `%s`,
  //   title:`%s`,
  //   channel_name: `%s`,
  //   channel_url: `%s`,
  //   description: `%s`
  //   },
  let vid_list_container = document.createElement("div"); //CONTAIN ALL
  vid_list_container.setAttribute("class", "vid-list-channel");
  vid_list_container.setAttribute("link", list["channel_url"]);

  let div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  let img1 = document.createElement("img");
  img1.setAttribute("src", list["thumbnail"]);
  div_img.appendChild(img1); //container 1

  let div_content = document.createElement("div"); //container 2
  div_content.setAttribute("class", "content");
  let p1 = document.createElement("p"); //to add
  p1.appendChild(document.createTextNode(list["title"]));
  p1.setAttribute("title", list["title"]);
  p1.setAttribute("class", "color-make-white");
  let p2 = document.createElement("p"); //to add
  p2.appendChild(
    document.createTextNode(list["channel_name"] + " • " + "subscribers")
  );
  p2.setAttribute("class", "desc-content-color");

  let p4 = document.createElement("p");
  p4.appendChild(document.createTextNode(list["description"]));
  p4.setAttribute("title", "From Video description");
  p4.setAttribute("class", "desc-content-color");

  div_content.appendChild(p1);
  div_content.appendChild(p2);
  div_content.appendChild(p4);
  vid_list_container.appendChild(div_img);
  vid_list_container.appendChild(div_content);

  list_container.appendChild(vid_list_container);
}

for (let i of vid_list) {
  if (i["type"] == "video") {
    video_add(i);
  } else {
    channel_add(i);
  }
}

all_video = document.querySelectorAll(".vid-list");
for (let i of all_video) {
  i.addEventListener("click", () => {
    localStorage.setItem("title", i.getElementsByTagName("p")[0].textContent); //setting the title
    localStorage.setItem("channel", i.getElementsByTagName("a")[0].textContent); //setting the channel
    localStorage.setItem("video", i.getAttribute("embed")); //setting the embed video
    localStorage.setItem("views", i.getElementsByTagName("p")[1].textContent);
    localStorage.setItem("desc", i.getElementsByTagName("p")[2].textContent);
    localStorage.setItem(
      "icon",
      i.getElementsByTagName("img")[1].getAttribute("src")
    );
    window.location.href = "play-video";
  });
}

color_make_white = document.querySelectorAll(".color-make-white");
desc_content_color = document.querySelectorAll(".desc-content-color");

if (localStorage.getItem("theme") == 1) {
  for (let i of document.getElementsByClassName("color-make-white")) {
    i.style.color = "#fff"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
  }
  for (let i of desc_content_color) {
    i.style.color = "#ADB5BD";
  }
}

var list_container = document.getElementsByClassName("list-container")[0];

function video_add(list) {
  let vid_list_container = document.createElement("div"); //CONTAIN ALL
  vid_list_container.setAttribute("class", "vid-list");
  vid_list_container.setAttribute("embed", list["video"]);

  let div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  let img1 = document.createElement("img");
  img1.setAttribute("src", list["thumbnail"]);
  div_img.appendChild(img1); //container 1

  let div_content = document.createElement("div"); //container 2
  div_content.setAttribute("class", "content");
  let p1 = document.createElement("p"); //to add
  p1.appendChild(document.createTextNode(list["title"]));
  p1.setAttribute("title", list["title"]);
  p1.setAttribute("class", "color-make-white");
  let p2 = document.createElement("p"); //to add
  p2.appendChild(
    document.createTextNode(list["views"] + " • " + list["upload_date"])
  );
  p2.setAttribute("class", "desc-content-color");

  let div = document.createElement("div"); //in continaer
  let img2 = document.createElement("img");
  img2.setAttribute("src", list["channel_icon"]);
  let p3 = document.createElement("a");
  p3.appendChild(document.createTextNode(list["channel_name"]));
  p3.setAttribute("title", list["channel_name"]);
  p3.setAttribute("class", "desc-content-color");

  let p4 = document.createElement("p");
  p4.appendChild(document.createTextNode(list["description"]));
  p4.setAttribute("title", "From Video description");
  p4.setAttribute("class", "desc-content-color");

  div.appendChild(img2);
  div.appendChild(p3);

  div_content.appendChild(p1);
  div_content.appendChild(p2);
  div_content.appendChild(div);
  div_content.appendChild(p4);
  vid_list_container.appendChild(div_img);
  vid_list_container.appendChild(div_content);

  list_container.appendChild(vid_list_container);
}

for (let i of vid_list) {
  video_add(i);
}

all_video = document.querySelectorAll(".vid-list");
for (let i of all_video) {
  i.addEventListener("click", () => {
    localStorage.setItem("title", i.getElementsByTagName("p")[0].textContent); //setting the title
    localStorage.setItem("channel", i.getElementsByTagName("a")[0].textContent); //setting the channel
    localStorage.setItem("video", i.getAttribute("embed")); //setting the embed video
    localStorage.setItem("views", i.getElementsByTagName("p")[1].textContent);
    localStorage.setItem("desc", i.getElementsByTagName("p")[2].textContent);
    localStorage.setItem(
      "icon",
      i.getElementsByTagName("img")[1].getAttribute("src")
    );
    window.location.href = "play-video";
  });
}

// for (let i of document.getElementsByClassName("color-make-white")) {
//   i.style.color = "#fff"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
// }
color_make_white = document.querySelectorAll(".color-make-white");
desc_content_color = document.querySelectorAll(".desc-content-color");

if (localStorage.getItem("theme") == 1) {
  for (let i of document.getElementsByClassName("color-make-white")) {
    i.style.color = "#fff"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
  }
  for (let i of desc_content_color) {
    i.style.color = "#ADB5BD";
  }
}
