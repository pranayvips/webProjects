var menuIcon = document.querySelector(".menu-icon"); //sidebar icon on top left
var sidebar = document.querySelector(".sidebarr"); //main sidebar bar
var user_icon = document.querySelector(".user-icon-options"); //This is the user-icon on top right
var notification_main = document.getElementById("notification-bar"); //shows notification bar div
var container = document.querySelector(".container"); //this is the main element which contain all element in page below top bar
var youtube_logo = document.getElementsByClassName("logo")[0]; //the youtube logo image on top left corner
var notification = document.getElementById("notification"); //this is the notification icon
var inputbox = document.getElementById("inputbox"); //this is the inputbox to serach

// by tag element
var body = document.getElementsByTagName("body")[0]; //this is the body element
var nav = document.getElementsByTagName("nav")[0]; //this is the nav element

//selecting some classes
var color_make_white = document.querySelectorAll(".color-make-white"); //color make white class
var desc_content_color = document.querySelectorAll(".desc-content-color"); //desc-content-color change color only

var user_icon_state = 0; //manage user icon clicks
var notification_state = 0; //manage notification clicks
var themer = 0;
function manage_sidebar() {
  sidebar.classList.toggle("hide-sidebar");
  container.classList.toggle("container1");
}

function Click_time() {
  // this function activates on user-icon click or notification click
  // it do, if you click outside of the box then it will hide the user-icon-options
  // same for notification bar ..
  document.onclick = function (event) {
    if (user_icon_state == 2) {
      user_icon.setAttribute("class", "user-icon-options");
      user_icon_state = 0;
    } else if (user_icon_state == 1) {
      user_icon.setAttribute("class", "user-icon-options1");
      user_icon_state += 1;
    }
    if (notification_state == 2) {
      notification_main.setAttribute("class", "notification-bar");
      notification_state = 0;
    } else if (notification_state == 1) {
      notification_main.setAttribute("class", "notification-bar1");
      notification_state += 1;
    }
  };
}

function add_on_sidebar() {
  var subscribed_list = document.getElementsByClassName("subscribed-list")[0];
  let subscribe = localStorage.getItem("subscribe").split(":::");
  // <a href="">
  //   <img src="images/Jack.png" alt="" />
  //   <p class="sidebar-p">Prnay</p>
  // </a>
  for (i of subscribe) {
    if (i.length < 3) {
      continue;
    }
    i = i.split(";;");
    let a = document.createElement("a");
    let img = document.createElement("img");
    if (i[1] != "not") {
      img.setAttribute("src", i[1]);
    } else {
      img.setAttribute("src", "static/Jack.png");
    }
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(i[0]));
    p.setAttribute("class", "color-make-white");
    a.appendChild(img);
    a.appendChild(p);
    subscribed_list.appendChild(a);
  }
  if (themer) {
    for (let i of document.getElementsByClassName("color-make-white")) {
      i.style.color = "#fff"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
    }
  } else {
    for (let i of document.getElementsByClassName("color-make-white")) {
      i.style.color = "#000"; //making the color white of comment section part , can be used to make whtie to any class "color-make-white"
    }
  }
}

function Theme() {
  if (!themer) {
    localStorage.setItem("theme", 1);
    themer = 1;
    for (let i of color_make_white) {
      i.style.color = "#fff";
      i.style.stroke = "#fff";
    }
    for (let i of desc_content_color) {
      // i.style.color = "#5A5A5A";
      i.style.color = "#ADB5BD";
      i.style.borderColor = "#5a5a5a";
    }
    body.style.backgroundColor = "#0f0f0f";
    nav.style.backgroundColor = "#0f0f0f";
    container.style.backgroundColor = "#0f0f0f";
    sidebar.style.backgroundColor = "#0f0f0f";
    menuIcon.style.stroke = "#fff";
    youtube_logo.setAttribute("src", "static/images/logo0.png"); //top bar youtube logo
    notification.style.stroke = "#fff";
    document.getElementById("search-button").style.backgroundColor =
      "transparent";
    document.getElementById("search-button").children[0].style.stroke = "#fff";
    document.getElementById("search-button").style.borderColor = "#303030";
    inputbox.style.borderColor = "#303030";
    document.getElementById("user-icon-options").style.backgroundColor =
      "#0f0f0f";
    document.getElementById("user-icon-options").style.boxShadow =
      "0 0 10px 5px rgba(255, 255, 255, 0.2)";
  } else {
    localStorage.setItem("theme", 0);
    themer = 0;
    for (let i of color_make_white) {
      i.style.color = "#000";
      i.style.stroke = "#000";
    }
    for (let i of desc_content_color) {
      i.style.color = "#5A5A5A";
      i.style.borderColor = "#ADB5BD";
      // i.style.color = "#ADB5BD";
    }
    body.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#fff";
    container.style.backgroundColor = "#fff";
    sidebar.style.backgroundColor = "#fff";
    menuIcon.style.stroke = "#000";
    youtube_logo.setAttribute("src", "static/images/logo1.png"); //top bar youtube logo
    notification.style.stroke = "#000";
    document.getElementById("search-button").style.backgroundColor = "#f8f8f8";
    document.getElementById("search-button").children[0].style.stroke = "#000";
    document.getElementById("search-button").style.borderColor = "#ccc";
    inputbox.style.borderColor = "#ccc";

    document.getElementById("user-icon-options").style.backgroundColor = "#fff";
    document.getElementById("user-icon-options").style.boxShadow =
      "0 0 10px 5px rgba(0, 0, 0, 0.2)";
  }
}

menuIcon.onclick = manage_sidebar;

document.getElementById("user-icon").addEventListener("click", () => {
  // this activates user-icon-options
  if (!user_icon_state) {
    user_icon.setAttribute("class", "user-icon-options1");
    user_icon_state = 1;
    Click_time();
  } else {
    user_icon.setAttribute("class", "user-icon-options");
    user_icon_state = 0;
  }
});

notification.addEventListener("click", () => {
  // This shows notification bar on top left
  if (!notification_state) {
    notification_main.setAttribute("class", "notification-bar1");
    notification_state = 1;
    Click_time();
  } else {
    notification_main.setAttribute("class", "notification-bar");
    notification_state = 0;
  }
});

document.getElementById("theme").addEventListener("click", () => {
  //The Apperance button in user-icon-options to change the theme
  Theme();
  user_icon.setAttribute("class", "user-icon-options");
  user_icon_state = 0;
});

// inputbox.onkeydown = () => {
//   console.log("heuahai");
// };

inputbox.value = localStorage.getItem("search_input");
inputbox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    window.location.href = "search_for_q=<" + inputbox.value + ">";
    localStorage.setItem("search_input", inputbox.value);
  }
});

// ON START

if (localStorage.getItem("theme") == 1) {
  Theme();
}

add_on_sidebar();
