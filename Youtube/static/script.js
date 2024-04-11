var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var search_box = document.querySelector(".search-box");
var container = document.querySelector(".container");
var flex_div = document.querySelector(".flex-div");
var sidebar_p = document.querySelectorAll(".sidebar-p");
var nav = document.getElementsByTagName("nav");
var a_tag = document.getElementsByTagName("a");
var p_tag = document.getElementsByTagName("p");
var h3_tag = document.getElementsByTagName("h3");
var scrollbar = document.querySelector(".body");
var setting_icon_notification = document.querySelector(".setting-icon");
var user_icon = document.querySelector(".user-icon-options");
var notification_main = document.getElementById("notification-bar");
var user_icon_id = document.getElementById("user-icon-options");
var options_icon = document.querySelectorAll(".user-options-icon");
var search_box = document.querySelector(".search-box");
var theme_text = document.getElementById("theme_text");
var search_button = document.getElementById("search-button");
var notification = document.getElementById("notification");
var arrow_right = document.querySelectorAll(".arrow-right");
var Logo = document.getElementsByClassName("logo")[0];
var main_mob = document.getElementsByClassName("main-mob")[0];
var top_tags = document.getElementsByClassName("top-tags")[0];
var mob_icon = document.getElementsByClassName("mob-icon");
var inputbox = document.getElementById("inputbox");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};

// localStorage.setItem("subscribe", "");
var themer = 0;
var user_icon_state = 0;
var user_notification_state = 0;
var top_tags_scroll = 0;
MOBILE_WIDTH = 950;
function Theme() {
  sidebar.classList.toggle("sidebar1");
  container.classList.toggle("container1");
  flex_div.classList.toggle("flex-div1");
  scrollbar.classList.toggle("body1");
  search_box.classList.toggle("search-box1");
  let WIDTH = window.innerWidth;
  if (!themer) {
    localStorage.setItem("theme", 1);
    themer = 1;
    user_icon_id.style.background = "#282828";
    user_icon_id.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.5)";
    nav[0].style.background = "#0F0F0F";
    h3_tag[0].style.color = "#adb5bd";

    let v = a_tag.length;
    for (let i = 0; i < v; i++) {
      a_tag[i].style.color = "#fff";
    }
    v = p_tag.length;
    for (let i = 0; i < v; i++) {
      p_tag[i].style.color = "#adb5bd";
    }
    sidebar_p.forEach((box) => {
      box.style.color = "#fff";
    });
    theme_text.textContent = "Appearance: Dark Mode";
    options_icon.forEach((box) => {
      box.style.background = "#282828";
      box.style.stroke = "#fff";
    });
    arrow_right.forEach((box) => {
      box.setAttribute("class", "arrow-right1");
    });
    Logo.setAttribute("src", "static/images/logo0.png");
    main_mob.style.backgroundColor = "#000";
    for (let box = 0; box < 5; box++) {
      mob_icon[box].style.stroke = "#fff";
    }
    notification.style.stroke = "#fff";
    setting_icon_notification.style.stroke = "#fff";
    notification_main.style.backgroundColor = "#282828";
    notification_main.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    search_button.children[0].style.stroke = "#fff";
    inputbox.style.borderColor = "#303030";
    for (box = 0; box < 16; box++) {
      top_tags.children[box].style.color = "#efefef";
      top_tags.children[box].style.backgroundColor = "#272727";
    }
    top_tags.children[0].style.color = "#000";
    top_tags.children[0].style.backgroundColor = "#efefef";
    document.getElementById("menu-icon").style.stroke = "#fff"; //menu icon button on top left

    document.getElementById("top-tags-scroll").style.stroke = "#fff";
    document.getElementById("top-tags-scroll").style.backgroundColor =
      "#0f0f0f";
    document.getElementById("top-tags-scroll").style.boxShadow =
      "-15px 0px 20px 15px #0F0F0F";

    // MOBILE AND COMPUTER DEPENDENT STYLES

    if (WIDTH < 900) {
      search_button.style.borderColor = "#0f0f0f";
      search_button.style.backgroundColor = "#0f0f0f";
    } else {
      search_button.style.borderColor = "#303030";
      search_button.style.backgroundColor = "#222";
    }
  } else {
    themer = 0;
    localStorage.setItem("theme", 0);
    user_icon_id.style.backgroundColor = "#fff";
    user_icon_id.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    nav[0].style.background = "#fff";
    h3_tag[0].style.color = "#5a5a5a";

    let v = a_tag.length;
    for (let i = 0; i < v; i++) {
      a_tag[i].style.color = "#000";
    }
    v = p_tag.length;
    for (let i = 0; i < v; i++) {
      p_tag[i].style.color = "#5a5a5a";
    }
    sidebar_p.forEach((box) => {
      box.style.color = "#5a5a5a";
    });
    theme_text.textContent = "Appearance: Light Mode";
    options_icon.forEach((box) => {
      box.style.background = "#fff";
      box.style.stroke = "#000";
    });
    arrow_right.forEach((box) => {
      box.setAttribute("class", "arrow-right");
    });
    Logo.setAttribute("src", "static/images/logo1.png");
    main_mob.style.backgroundColor = "#fff";
    for (let box = 0; box < 5; box++) {
      mob_icon[box].style.stroke = "#000";
    }
    notification.style.stroke = "#000";
    setting_icon_notification.style.stroke = "#000";
    notification_main.style.backgroundColor = "#fff";
    notification_main.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    search_button.children[0].style.stroke = "#000";
    inputbox.style.borderColor = "#ccc";
    for (box = 0; box < 16; box++) {
      top_tags.children[box].style.color = "#000";
      top_tags.children[box].style.backgroundColor = "#f2f2f2";
    }
    top_tags.children[0].style.color = "#efefef";
    top_tags.children[0].style.backgroundColor = "#000";
    document.getElementById("menu-icon").style.stroke = "#000"; //menu icon button on top left

    // MOBILE AND COMPUTER DEPENDENT STYLES
    document.getElementById("top-tags-scroll").style.stroke = "#000";
    document.getElementById("top-tags-scroll").style.backgroundColor = "#fff";
    document.getElementById("top-tags-scroll").style.boxShadow =
      "-15px 0px 20px 15px #fff";

    if (WIDTH < 900) {
      search_button.style.borderColor = "#0f0f0f";
      search_button.style.backgroundColor = "#0f0f0f";
    } else {
      search_button.style.borderColor = "#ccc";
      search_button.style.backgroundColor = "#f8f8f8";
    }
  }
}

function add_on_sidebar() {
  var subscribed_list = document.getElementsByClassName("subscribed-list")[0];
  let subscribe = localStorage.getItem("subscribe").split(":::");
  console.log(subscribe);
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

function Click_time() {
  document.onclick = function (event) {
    if (user_icon_state == 2) {
      user_icon.setAttribute("class", "user-icon-options");
      user_icon_state = 0;
    } else if (user_icon_state) {
      user_icon_state = 2;
      notification_main.setAttribute("class", "notification-bar");
      user_notification_state = 0;
    }
    if (user_notification_state == 2) {
      notification_main.setAttribute("class", "notification-bar");
      user_notification_state = 0;
    } else if (user_notification_state) {
      user_notification_state = 2;
      user_icon.setAttribute("class", "user-icon-options");
      user_icon_state = 0;
    }
  };
}
document.getElementById("user-icon").addEventListener("click", () => {
  if (!user_icon_state) {
    user_icon.setAttribute("class", "user-icon-options1");
    user_icon_state = 1;
    Click_time();
  } else {
    user_icon.setAttribute("class", "user-icon-options");
    user_icon_state = 0;
  }
});

document.getElementById("notification").addEventListener("click", () => {
  if (!user_notification_state) {
    notification_main.setAttribute("class", "notification-bar1");
    user_notification_state = 1;
    Click_time();
  } else {
    notification_main.setAttribute("class", "notification-bar");
    user_notification_state = 0;
  }
});

document.getElementById("theme").addEventListener("click", () => {
  Theme();
  user_icon.setAttribute("class", "user-icon-options");
  user_icon_state = 0;
});

document.getElementById("top-tags-scroll").addEventListener("click", () => {
  let scrollable_width = top_tags.scrollWidth - top_tags.clientWidth;
  if (!top_tags_scroll) {
    let ap = setInterval(() => {
      top_tags.scrollLeft += 2;
      if (top_tags.scrollLeft >= scrollable_width) {
        document
          .getElementById("top-tags-scroll")
          .children[0].setAttribute("d", "M15.75 19.5L8.25 12l7.5-7.5");
        top_tags_scroll = 1;
        clearInterval(ap);
      }
    }, 5);
  } else {
    let pa = setInterval(() => {
      top_tags.scrollLeft -= 2;
      if (top_tags.scrollLeft <= 0) {
        document
          .getElementById("top-tags-scroll")
          .children[0].setAttribute("d", "M8.25 4.5l7.5 7.5-7.5 7.5");
        top_tags_scroll = 0;
        clearInterval(pa);
      }
    }, 5);
  }
});

if (localStorage.getItem("theme") != 0) {
  Theme();
}

document.getElementById("cross").addEventListener("click", () => {
  inputbox.value = "";
});

window.addEventListener("resize", () => {
  if (window.innerWidth < MOBILE_WIDTH) {
    search_button.style.borderColor = "transparent";
    search_button.style.backgroundColor = "transparent";
  } else {
    if (themer) {
      search_button.style.borderColor = "#303030";
      search_button.style.backgroundColor = "#222";
    } else {
      search_button.style.borderColor = "#ccc";
      search_button.style.backgroundColor = "#F8F8F8";
    }
  }
});

all_video = document.querySelectorAll(".vid-list");
for (let i of all_video) {
  i.addEventListener("click", () => {
    localStorage.setItem("title", i.getElementsByTagName("a")[1].textContent); //setting the title
    localStorage.setItem("channel", i.getElementsByTagName("p")[1].textContent); //setting the channel
    localStorage.setItem("video", i.getAttribute("embed")); //setting the embed video
    localStorage.setItem("views", i.getElementsByTagName("p")[2].textContent); //setting the channel
    // window.open("templates/play-video-1.html", "_self");
    window.location.href = "play-video";
  });
}

localStorage.setItem("search_input", "");

inputbox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    window.location.href = "search_for_q=<" + inputbox.value + ">";
    localStorage.setItem("search_input", inputbox.value);
  }
});

add_on_sidebar();
