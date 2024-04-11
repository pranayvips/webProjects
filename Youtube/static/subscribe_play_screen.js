let current_channel = localStorage.getItem("channel");
// localStorage.setItem("subscribe", "pranay;;images/Jack.png:::");

function subscribe_checker() {
  let subscribe = localStorage.getItem("subscribe").split(":::");
  var is_subscribed = 0;

  for (let i of subscribe) {
    i = i.split(";;");
    if (i[0] == current_channel) {
      is_subscribed = 1;
    }
  }
  if (is_subscribed) {
    document.getElementById("subscribe").textContent = "Subscribed";
    if (themer) {
      document.getElementById("subscribe").style.background = "#262626";
      document.getElementById("subscribe").style.color = "#fff";
      subscribes = 1;
    } else {
      document.getElementById("subscribe").style.background = "#f2f2f2";
      document.getElementById("subscribe").style.color = "#000";
    }
  }
  return is_subscribed;
}

function subscribe_remover() {
  let subscribe = localStorage.getItem("subscribe").split(":::");
  let list = "";
  var o_sus = 0;
  var oka = 0;
  for (let i of subscribe) {
    let k = i.split(";;");
    if (k[0] != current_channel) {
      list += i;
    } else {
      oka = o_sus;
    }
    o_sus += 1;
  }
  document
    .getElementsByClassName("subscribed-list")[0]
    .getElementsByTagName("a")
    [oka].remove();

  localStorage.setItem("subscribe", list);
  subscribes = 0;
  if (themer) {
    document.getElementById("subscribe").style.background = "#fff";
    document.getElementById("subscribe").style.color = "#000";
    subscribes = 1;
  } else {
    document.getElementById("subscribe").style.background = "#000";
    document.getElementById("subscribe").style.color = "#fff";
  }
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

document.getElementById("subscribe").addEventListener("click", () => {
  if (!subscribe_checker()) {
    let icon = document.getElementById("channel-icon").getAttribute("src");
    localStorage.setItem(
      "subscribe",
      localStorage.getItem("subscribe") +
        localStorage.getItem("channel") +
        ";;" +
        icon +
        ":::"
    );
    subscribe_checker();
    add_on_sidebar();
    if (themer) {
      document.getElementById("subscribe").style.background = "#262626";
      document.getElementById("subscribe").style.color = "#fff";
      subscribes = 1;
    } else {
      document.getElementById("subscribe").style.background = "#f2f2f2";
      document.getElementById("subscribe").style.color = "#000";
    }
  } else {
    subscribe_remover();
    document.getElementById("subscribe").textContent = "Subscribe";
  }
});

subscribe_checker();
add_on_sidebar();
