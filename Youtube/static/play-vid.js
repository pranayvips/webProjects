var video = document.getElementsByTagName("video")[0]; //Select the main video
var seek = document.getElementById("seek"); //Select the main video seek
var seek1 = document.getElementById("seek-back1"); //This is the element that has red color on video seek
var pause = document.querySelectorAll(".play-video-options")[0]; //This is the icon of play/pause on video
var vid_time = document.getElementById("timing"); //This is the p tag which display current time/video length
var seek_sound = document.getElementById("sounder"); //This is the sound seek that controls sound
var sound = document.getElementById("sound"); //This is the sound icon on video page
var user_icon = document.querySelector(".user-icon-options"); //This is the user-icon on top left
var notification_main = document.getElementById("notification-bar"); //shows notification bar div
var sidebar = document.querySelectorAll(".sidebar-p"); //This is the sidebar on right side

//VARIABLE FOR THEME----------starts here
var container = document.querySelector(".container"); //this is the main element which contain all element in page below top bar
var scrollbar = document.getElementsByTagName("body")[0]; // this is body tag , used here for making scrollbar invert color
// var search_box = document.querySelector(".search-box");
var nav = document.getElementsByTagName("nav")[0]; //Select the (nav) element on html page
var h3_tag = document.getElementsByTagName("h3"); //Video Title below the video page
var video_down_options = document.getElementById("vid-down"); //Options to like dislike below video
var vid_color = document.querySelectorAll(".vid-color"); //------------------------------------------

var a_tag = document.getElementsByTagName("a"); //Selects all the <a> tag element
var p_tag = document.getElementsByTagName("p"); //Selects all the <p> tag element
var youtube_logo = document.getElementsByClassName("logo")[0]; //the youtube logo image on top left corner
var main_mob = document.getElementsByClassName("main-mob")[0]; //This option avialable on mobile only,, this is the bottom menu on mobile
var mob_icon = document.getElementsByClassName("mob-icon"); //This option avialable on mobile only,, this is the bottom icon on mobile
// USER-ICON-OPTIONS VARIABLES
var user_icon_id = document.getElementById("user-icon-options"); //main parent element of user-options bar
var user_options_icon = document.querySelectorAll(".user-options-icon"); //all icon on user-options
var user_options_icon_arrow = document.querySelectorAll(".arrow-right"); //the arrow icon on user-options
var search_button = document.getElementById("search-button"); //the search icon on right of input box
var inputbox = document.getElementById("inputbox"); //this is the the input box
// NOTIFICATION BAR VARIABLES
var notification = document.getElementById("notification"); //the notification icon on top right
var setting_icon_notification = document.querySelector(".setting-icon"); //the settings icon on notification bar
//VARIABLE FOR THEME----------ends here

var vid_status = 0; //this controls the video status ;;; if vid_status=0 , then video is paused
var sound_status = 0; //this controls the audio status ;;; if sound_status=1 , then audio is muted
var timer; //this is setTimeout() function which activates Set_time() func.... & it sets the video seek and set the time of video
var user_icon_state = 0; // this shows user-icon-options on clicking
var notification_state = 0; //this controls notification bar status to display or to hide
var themer = 0; //controls the theme of page if 0 then it is light theme
var sidebar_btn = 0; //controls the sidebar

function play_pause() {
  // This is a function to play and pause the video alternatively.... and change the svg of play pause icon
  if (!vid_status) {
    video.play();
    pause.children[0].setAttribute("d", "M15.75 5.25v13.5m-7.5-13.5v13.5");
    timer = setInterval(Set_time, 500);
  } else {
    video.pause();
    pause.children[0].setAttribute(
      "d",
      "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
    );
    clearInterval(timer);
  }
  vid_status = vid_status == 0 ? 1 : 0;
}

function Sound_changer() {
  // This is a function that activate on clicking sound icon , if sound_status=0 then this will make audio mute....&it also change svg of sound
  if (!sound_status) {
    video.volume = 0;
    sound_status = 1;
    sound.children[0].setAttribute(
      "d",
      "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
    );
  } else {
    video.volume = 1;
    sound_status = 0;
    sound.children[0].setAttribute(
      "d",
      "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    );
    clearInterval(timer);
  }
}

function Set_time() {
  // this function sets the video seek (timer is the variable name) and it also changes the svg to pause if video ends
  seek.value = String((video.currentTime / video.duration) * 100);
  seek1.style.width = seek.value + "%";
  vid_time.textContent =
    video.currentTime.toString().substring(0, 3) +
    " / " +
    String(video.duration);
  if (video.currentTime == video.duration) {
    clearInterval(timer);
    vid_status = 0;
    pause.children[0].setAttribute(
      "d",
      "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
    ); //this makes the video icon to (pause icon)
  }
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

function Theme() {
  //This function inverts the current theme of page
  container.classList.toggle("container1");
  scrollbar.classList.toggle("body1");

  // search_box.classList.toggle("search-box1");
  if (!themer) {
    localStorage.setItem("theme", 1);
    themer = 1;

    user_icon_id.style.background = "#282828"; //user-icon options
    user_icon_id.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.5)"; //user-icon options
    theme_text.textContent = "Appearance: Dark Mode"; //user-icon options ,Appearance button value
    user_options_icon.forEach((box) => {
      box.style.background = "#282828"; //user-icon options
      box.style.stroke = "#fff"; //user-icon options
    });
    user_options_icon_arrow.forEach((box) => {
      box.setAttribute("class", "arrow-right1"); //user-icon options
    });

    document.getElementsByClassName("sidebarr")[0].style.backgroundColor =
      "#0F0F0F"; //sidebar to be shown in left side

    nav.style.background = "#0F0F0F"; //top bar ,background
    youtube_logo.setAttribute("src", "./images/logo0.png"); //top bar youtube logo

    video.style.boxShadow = "8px 8px 96px rgba(255, 255, 255, 0.2)"; //video shadow

    for (let box of a_tag) {
      box.style.color = "#fff"; //all <a> tag
    }

    for (let box of p_tag) {
      box.style.color = "#adb5bd"; //all <p> tag
    }

    main_mob.style.backgroundColor = "#000"; //mobile options,background
    for (let box of mob_icon) {
      box.style.stroke = "#fff"; //mobile options,icons
    }

    notification.style.stroke = "#fff"; //notification bar,main icon color
    setting_icon_notification.style.stroke = "#fff"; //notification bar,setting icon on notification bar
    notification_main.style.backgroundColor = "#282828"; //notification bar,background of notification bar
    notification_main.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)"; //notification bar,shadow of notification bar

    search_button.style.borderColor = "#303030"; //search box, right,
    search_button.style.backgroundColor = "#222"; //search box, right,
    search_button.children[0].style.stroke = "#fff"; //search box, right,
    inputbox.style.borderColor = "#303030"; //search box, main,

    for (i of h3_tag) {
      i.style.color = "#adb5bd"; //makes all user name in comments color change
    }

    for (let box of vid_color) {
      box.style.backgroundColor = "#2B2A2B"; //video down options
    }

    for (let box of sidebar) {
      box.style.color = "#fff"; //sidebar text color
    }

    document.getElementById("title").style.color = "#fff"; //video title color
    document.getElementById("menu-icon").style.stroke = "#fff"; //menu icon button on top left
  } else {
    localStorage.setItem("theme", 0);
    themer = 0;

    user_icon_id.style.background = "#fff"; //user-icon options
    user_icon_id.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"; //user-icon options
    theme_text.textContent = "Appearance: Light Mode"; //user-icon options ,Appearance button value
    user_options_icon.forEach((box) => {
      box.style.background = "#fff"; //user-icon options
      box.style.stroke = "#000"; //user-icon options
    });
    user_options_icon_arrow.forEach((box) => {
      box.setAttribute("class", "arrow-right"); //user-icon options
    });

    document.getElementsByClassName("sidebarr")[0].style.backgroundColor =
      "#fff"; //sidebar to be shown in left side

    nav.style.background = "#fff"; //top bar ,background
    youtube_logo.setAttribute("src", "./images/logo1.png"); //top bar youtube logo

    video.style.boxShadow = "8px 8px 96px rgba(0, 0, 0, 0.2)"; //video shadow

    for (let box of a_tag) {
      box.style.color = "#000"; //all <a> tag
    }

    for (let box of p_tag) {
      box.style.color = "#5a5a5a"; //all <p> tag
    }

    main_mob.style.backgroundColor = "#fff"; //mobile options,background
    for (let box of mob_icon) {
      box.style.stroke = "#000"; //mobile options,icons
    }

    notification.style.stroke = "#000"; //notification bar,main icon color
    setting_icon_notification.style.stroke = "#000"; //notification bar,setting icon on notification bar
    notification_main.style.backgroundColor = "#fff"; //notification bar,background of notification bar
    notification_main.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"; //notification bar,shadow of notification bar

    search_button.style.borderColor = "#ccc"; //search box, right,
    search_button.style.backgroundColor = "#f8f8f8"; //search box, right,
    search_button.children[0].style.stroke = "#000"; //search box, right,
    inputbox.style.borderColor = "#ccc"; //search box, main,

    for (i of h3_tag) {
      i.style.color = "#000"; //makes all user name in comments color change
    }
    for (let box of vid_color) {
      box.style.backgroundColor = "#f2f2f2"; //video down options
      box.children[0].style.color = "#5a5a5a";
    }
    document.getElementById("title").style.color = "#000"; //video title color
    document.getElementById("menu-icon").style.stroke = "#000"; //menu icon button on top left
  }
  vid_time.style.color = "#fff";
}

// Add Listener
sound.addEventListener("click", Sound_changer); //if click on sound icon
pause.addEventListener("click", play_pause); //if click on play/pause icon
video.addEventListener("click", play_pause); //if click on the video anywhere

seek.addEventListener("click", () => {
  // on clicking anywhere on video seek this will make video to go to that time
  seek1.style.width = seek.value + "%";
  video.currentTime = (seek.value * video.duration) / 100;
});

seek_sound.addEventListener("click", () => {
  // this is sound seek to set the sound of video
  if (seek_sound.value == 0) {
    sound.children[0].setAttribute(
      "d",
      "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
    );
  } else {
    sound.children[0].setAttribute(
      "d",
      "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    );
    video.volume = seek_sound.value / 100;
  }
});

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
document.getElementById("theme").addEventListener("click", () => {
  //The Apperance button in user-icon-options to change the theme
  Theme();
  user_icon.setAttribute("class", "user-icon-options");
  user_icon_state = 0;
});

document.getElementById("notification").addEventListener("click", () => {
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

document.getElementById("fullscreen").addEventListener("click", () => {
  video.requestFullscreen();
});
document.getElementById("captions").addEventListener("click", () => {
  alert("Sorry,captions not avialable");
});

var like = 0; // like and dislike
var dislike = 0;
document.getElementById("like").addEventListener("click", () => {
  if (dislike) {
    document.getElementById("dislike").style.fill = "none";
    dislike = 0;
  }
  if (!like) {
    document.getElementById("like").style.fill = "#fff";
    like = 1;
  } else {
    document.getElementById("like").style.fill = "none";
    like = 0;
  }
});
document.getElementById("dislike").addEventListener("click", () => {
  if (like) {
    document.getElementById("like").style.fill = "none";
    like = 0;
  }
  if (!dislike) {
    document.getElementById("dislike").style.fill = "#fff";
    dislike = 1;
  } else {
    document.getElementById("dislike").style.fill = "none";
    dislike = 0;
  }
}); // like and dislike

document.getElementById("menu-icon").addEventListener("click", () => {
  document.querySelectorAll(".barr")[0].classList.toggle("barr1");
  document.querySelectorAll(".barr")[1].classList.toggle("barr1");
});

// Executing functions on loading
setTimeout(() => {
  Set_time();
}, 1000);
seek.value = "0%";

if (localStorage.getItem("theme") != 0) {
  Theme(); //Check if the theme is dark so to load it dark if needed
}

video.setAttribute("poster", localStorage.getItem("poster"));
document.title = localStorage.getItem("title");
document.getElementById("title").textContent = localStorage.getItem("title");
document.getElementById("channel").textContent =
  localStorage.getItem("channel");
