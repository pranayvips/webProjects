var top_nav = document.querySelectorAll(".top-nav");
var top_nav_show = document.querySelectorAll(".tab-er");
var play_tab = document.getElementsByClassName("play")[0];
var back = document.getElementsByClassName("back");
var top_nav_k = 0;

function remover() {
  for (let i of top_nav) {
    if (i.getAttribute("val") == "1") {
      i.style.borderBottom = "3px solid transparent";
      i.style.color = "wheat";
      play_tab.style.display = "block";
      i.setAttribute("val", "0");
    }
  }
  for (let ij of top_nav_show) {
    ij.style.display = "none";
  }
}

let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function accounts() {
  let acc_data = document.getElementById("acc-data").children;
  acc_data[0].innerHTML =
    "<strong>User's Name : </strong>" + localStorage.getItem("login");
  let date = localStorage.getItem("date").split(",,");
  acc_data[1].innerHTML =
    "<strong>Date Joined : </strong>" +
    week[parseInt(date[3])] +
    " , " +
    date[0] +
    month[parseInt(date[1])] +
    " , 2023";
  acc_data[2].innerHTML =
    "<strong>Matches Won : </strong>" +
    localStorage.getItem("score").split(",")[0];
  acc_data[3].innerHTML =
    "<strong>Matches Lost : </strong>" +
    localStorage.getItem("score").split(",")[1];
}

for (let i of top_nav) {
  i.addEventListener("click", () => {
    if (i.getAttribute("val") != "1") {
      remover();
      if (i.getAttribute("name") == "1") {
        accounts();
      }
      if (i.getAttribute("name") == "3") {
        level_defaults();
      }

      i.setAttribute("val", "1");
      i.style.borderBottom = "3px solid white";
      i.style.color = "white";
      play_tab.style.display = "none";
      for (let ij of top_nav_show) {
        if (ij.getAttribute("name") == i.getAttribute("name")) {
          ij.style.display = "grid";
        } else {
          ij.style.display = "none";
        }
      }
    } else {
      remover();
    }
  });
  top_nav_k += 1;
}

for (let backs of back) {
  backs.addEventListener("click", () => {
    remover();
  });
}

document.getElementsByClassName("level")[0].addEventListener("click", () => {
  let i = top_nav[2];
  i.setAttribute("val", "1");
  i.style.borderBottom = "3px solid white";
  i.style.color = "white";
  play_tab.style.display = "none";
  for (let ij of top_nav_show) {
    if (ij.getAttribute("name") == i.getAttribute("name")) {
      ij.style.display = "grid";
    } else {
      ij.style.display = "none";
    }
  }
});
