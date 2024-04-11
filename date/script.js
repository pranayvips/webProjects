document.getElementById("yes").addEventListener("click", () => {
  if (yes_click == 0) {
    document.getElementById("head").textContent = "Yeeyy ! Finally";
    document.getElementById("yes").textContent = "Let's fix a date !";
    document.getElementById("yes").style.width = "180px";
    document.getElementById("no-box").style.display = "none";
    hid.style.display = "none";
    document.title = "Yayy !!";
    document.getElementById("img").setAttribute("src", "yes.gif");
  } else if (yes_click == 1) {
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementsByClassName("date")[0].style.display = "grid";
  }
  yes_click += 1;
});
document.getElementById("yess").addEventListener("click", () => {
  send(document.getElementById("dater").value);
  document.getElementsByClassName("date")[0].style.display = "none";
  document.getElementsByClassName("okay")[0].style.display = "grid";
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function send(data) {
  fetch("/process-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let screen_width = window.innerWidth - 100;
let screen_height = window.innerHeight - 100;
let yes_click = 0;
let no_box = document.getElementById("no-box");
let hid = document.getElementById("hid");
let no = document.getElementById("no");
function go() {
  no.style.position = "absolute";
  hid.style.width = "80px";
  no.style.top = random(1, screen_height) + "px";
  no.style.left = random(1, screen_width) + "px";
}
no_box.addEventListener("mouseover", () => {
  go();
});
no_box.addEventListener("click", () => {
  go();
});
