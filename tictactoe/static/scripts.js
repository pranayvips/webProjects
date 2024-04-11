if (localStorage.getItem("level") == null) {
  localStorage.setItem("level", "0");
  localStorage.setItem("player", "0");
}

var click_list = [2, 2, 2, 2, 2, 2, 2, 2, 2]; //2 if blank,,,0 if "X",,,1 if "0"
var boxes = document.getElementsByClassName("board")[0].children;
var turn_text = document.getElementsByClassName("turn")[0];
var reset_button = document.getElementById("reset");
var msg_show = document.getElementsByClassName("msg-show");
var chance = 0;
var level = 0;
var player = 0; //0 if computer ,1 on human
var comp = 0; //if play with computer
var reseting = 0; //made this to solve a bug .
var match = 0; //0 if match is being played 1 if win or draw
var win_list = [];
var current_win = 0;
var current_lose = 0;
var current_score = document.getElementsByClassName("current-score");
for (let i of boxes) {
  i.addEventListener("click", () => {
    reset_button.style.display = "inline-flex";
    if (i.textContent.length == 0 && comp == 0 && !match) {
      reseting = 0;
      if (!chance) {
        i.textContent = "X";
        chance = 1;
        turn_text.textContent = "0's turn";
        i.style.color = "#f76707";
        click_list[parseInt(i.getAttribute("val"))] = 0;
      } else {
        i.textContent = "O";
        chance = 0;
        turn_text.textContent = "X's turn";
        i.style.color = "#495057";
        click_list[parseInt(i.getAttribute("val"))] = 1;
      }
      result();
      if (!player) {
        comp = 1;
        setTimeout(() => {
          computer_ji();
        }, 500);
      }
    }
  });
}

function draw() {
  document.getElementsByClassName("message")[0].style.display = "block";
  msg_show[0].children[0].setAttribute(
    "d",
    "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
  );
  msg_show[0].style.color = "#40c057";
  msg_show[1].textContent = "Match Draw";
  msg_show[2].textContent = "This match is tied";
  msg_show[3].style.backgroundColor = "#40c057";
}
function win() {
  for (let i of win_list) {
    boxes[i].style.animation = "shadow-win 4s linear";
    setTimeout(() => {
      boxes[i].style.boxShadow = "0 0 25px -10px rgba(255, 255, 255, 0.8)";
      boxes[i].style.backgroundColor = "#38d9a9";
      boxes[i].style.color = "#fff";
      document.getElementsByClassName("message")[0].style.display = "block";
    }, 4000);
  }
}

document.getElementById("message-ok").addEventListener("click", () => {
  document.getElementsByClassName("message")[0].style.display = "none";
  reset();
});

function reset() {
  for (let i in click_list) {
    click_list[i] = 2;
  }
  for (let i of boxes) {
    i.textContent = "";
    i.style.backgroundColor = "#38d9a9";
    i.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    i.style.animation = "none";
  }
  chance = 0;
  turn_text.textContent = "X's turn";
  match = 0;
  comp = 0;
  reset_button.style.display = "none";
}

// computerji functions here
function randoms() {
  let new_click_list = [];
  for (let i in click_list) {
    if (click_list[i] == 2) {
      new_click_list.push(i);
    }
  }
  if (new_click_list.length != 0) {
    let item =
      new_click_list[Math.floor(Math.random() * new_click_list.length)];

    if (!chance) {
      boxes[item].textContent = "X";
      turn_text.textContent = "0's turn";
      chance = 1;
      click_list[item] = 0;
      boxes[item].style.color = "#f76707";
    } else {
      turn_text.textContent = "X's turn";
      boxes[item].textContent = "O";
      chance = 0;
      boxes[item].style.color = "#495057";
      click_list[item] = 1;
    }
    comp = 0;
    result();
  } else {
    draw();
  }
}
function check(a, b, c) {
  if (
    click_list[a] == click_list[c] &&
    click_list[a] != 2 &&
    click_list[b] == 2
  ) {
    check_do(b);
    return true;
  } else if (
    click_list[a] == click_list[b] &&
    click_list[a] != 2 &&
    click_list[c] == 2
  ) {
    check_do(c);
    return true;
  } else if (
    click_list[b] == click_list[c] &&
    click_list[b] != 2 &&
    click_list[a] == 2
  ) {
    check_do(a);
    return true;
  } else {
    return false;
  }
}
function check_do(where) {
  if (!chance) {
    boxes[where].textContent = "X";
    click_list[where] = 0;
    chance = 1;
    turn_text.textContent = "0's turn";
    boxes[where].style.color = "#f76707";
  } else {
    turn_text.textContent = "X's turn";
    boxes[where].textContent = "O";
    click_list[where] = 1;
    boxes[where].style.color = "#495057";
    chance = 0;
  }
  comp = 0;
  result();
}
function check_imp() {}
function computer_ji() {
  if (level == 0 && !match) {
    // easy mode
    randoms();
  } else if (level == 1 && !match) {
    if (check(0, 1, 2)) {
    } else if (check(3, 4, 5)) {
    } else if (check(6, 7, 8)) {
    } else if (check(0, 4, 8)) {
    } else if (check(2, 4, 6)) {
    } else if (check(0, 3, 6)) {
    } else if (check(1, 4, 7)) {
    } else if (check(2, 5, 8)) {
    } else {
      randoms();
    }
  } else if (level == 1 && !match) {
    if (check(0, 1, 2)) {
    } else if (check(3, 4, 5)) {
    } else if (check(6, 7, 8)) {
    } else if (check(0, 4, 8)) {
    } else if (check(2, 4, 6)) {
    } else if (check(0, 3, 6)) {
    } else if (check(1, 4, 7)) {
    } else if (check(2, 5, 8)) {
    } else {
      check_imp();
    }
  }
}

document.getElementById("reset").addEventListener("click", () => {
  if (!reseting) {
    reseting = 1;
    reset();
  }
});

function result() {
  function res(a, b, c) {
    if (click_list[a] != 2 && click_list[b] != 2 && click_list[c] != 2) {
      if (click_list[a] == click_list[b] && click_list[b] == click_list[c]) {
        win_list = [a, b, c];
        return 1;
      }
    }
    return 0;
  }
  if (
    res(0, 4, 8) ||
    res(0, 3, 6) ||
    res(0, 1, 2) ||
    res(1, 4, 7) ||
    res(2, 5, 8) ||
    res(2, 4, 6) ||
    res(3, 4, 5) ||
    res(6, 7, 8)
  ) {
    match = 1;
    win();
    if (click_list[win_list[0]] == 0) {
      current_win += 1;
      current_score[0].textContent = current_win;
      let a = localStorage.getItem("score").split(",");
      localStorage.setItem("score", parseInt(a[0]) + 1 + "," + a[1]);
      turn_text.textContent = "X WINS!!!";
      msg_show[0].children[0].setAttribute(
        "d",
        (d =
          "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z")
      );
      msg_show[0].style.color = "#2297f7";
      msg_show[1].textContent = "You Won the match";
      msg_show[2].textContent = "Hurray you won the match";
      msg_show[3].style.backgroundColor = "#2297f7";
    } else {
      current_lose += 1;
      current_score[1].textContent = current_lose;
      let a = localStorage.getItem("score").split(",");
      localStorage.setItem("score", a[0] + "," + (parseInt(a[1]) + 1));
      turn_text.textContent = "Y WINS!!!";
      msg_show[0].children[0].setAttribute(
        "d",
        (d =
          "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z")
      );
      msg_show[0].style.color = "red";
      msg_show[1].textContent = "Hard Luck!";
      msg_show[2].textContent = "Opponent won the match";
      msg_show[3].style.backgroundColor = "red";
    }
  } else {
    let dos = 0;
    for (let i of click_list) {
      if (i == 2) {
        dos = 1;
      }
    }
    if (!dos) {
      match = 2;
      draw();
    }
  }
}

if (localStorage.getItem("login") != null) {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    `/${JSON.stringify("name:" + localStorage.getItem("login"))}`
  );
  request.send();
}
