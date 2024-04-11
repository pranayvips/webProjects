var slidebar = document.querySelectorAll(".middle")[0].children;
var slidebar_options_screen = document.querySelectorAll(".slidebar");
var ranker = [];

function refresh_video_page() {
  document.getElementById("channel-vid").remove();
  var script = document.createElement("script");
  script.setAttribute("src", "static/channel_vid_list.js");
  script.setAttribute("id", "channel-vid");
  document.getElementsByTagName("body")[0].appendChild(script);
}

for (let i of slidebar) {
  i.addEventListener("click", () => {
    butt.style.display = "none";
    for (let j of slidebar) {
      if (j != i) {
        j.style.borderBottom = "0";
        j.style.color = "#606060";
      }
    }
    let current_attribute_num = i.getAttribute("num");

    if (current_attribute_num == 2) {
      butt.style.display = "block";
      refresh_video_page();
    }

    for (let opt of slidebar_options_screen) {
      if (opt.getAttribute("num") != current_attribute_num) {
        opt.style.display = "none";
      } else {
        opt.style.display = "grid";
      }
    }
    i.style.borderBottom = "3px solid #606060";
    i.style.color = "#000";
  });
}
