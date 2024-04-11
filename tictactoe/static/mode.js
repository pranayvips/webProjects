// if (all_mode)
var level_display = document.getElementsByClassName("level")[0];
function Change_level(level, no = 0) {
  if (level == "0") {
    mode_easy.checked = true;
    level = 0;
    if (!no) {
      level_display.textContent = "#EASY";
      level_display.style.color = "#a9e34b";
    }
    level_display.style.textShadow = "0 0 6px white";
  } else if (level == "1") {
    mode_hard.checked = true;
    if (!no) {
      level_display.textContent = "#MEDIUM";
      level_display.style.color = "#0b7285";
      level_display.style.textShadow = "0 0 12px white";
    }
    level = 1;
  } else if (level == "2") {
    mode_imp.checked = true;
    level = 2;
    if (!no) {
      level_display.textContent = "#IMPOSSIBLE";
      level_display.style.color = "red";
    }
    level_display.style.textShadow = "1px 1px 18px white";
  }
}

function level_defaults() {
  mode_easy.checked = false;
  mode_hard.checked = false;
  mode_imp.checked = false;
  Change_level(String(level), 1);
}

document.getElementById("mode-comp-parent").addEventListener("click", () => {
  if (document.getElementById("mode-player").checked) {
    document.getElementById("mode-comp").checked = true;
    document.getElementById("mode-player").checked = false;
    Change_level(String(level));
  } else {
    document.getElementById("mode-comp").checked = true;
  }
  player = 0;
  localStorage.setItem("player", "0");
});
document.getElementById("mode-player-parent").addEventListener("click", () => {
  level_display.textContent = "#Player-Mode";
  level_display.style.color = "#364fc7";
  level_display.style.textShadow = "0 0 18px white";
  if (document.getElementById("mode-comp").checked) {
    document.getElementById("mode-comp").checked = false;
    document.getElementById("mode-player").checked = true;
  } else {
    document.getElementById("mode-player").checked = true;
  }
  player = 1;
  localStorage.setItem("player", "1");
});

var mode_easy_parent = document.getElementById("mode-easy-parent");
var mode_hard_parent = document.getElementById("mode-hard-parent");
var mode_imp_parent = document.getElementById("mode-imp-parent");
var mode_easy = document.getElementById("mode-easy");
var mode_hard = document.getElementById("mode-hard");
var mode_imp = document.getElementById("mode-imp");
mode_easy_parent.addEventListener("click", () => {
  if (!player) {
    mode_easy.checked = true;
    mode_hard.checked = false;
    mode_imp.checked = false;
    level = 0;
    localStorage.setItem("level", "0");
    Change_level("0");
  }
});
mode_hard_parent.addEventListener("click", () => {
  if (!player) {
    mode_easy.checked = false;
    mode_hard.checked = true;
    mode_imp.checked = false;
    level = 1;
    localStorage.setItem("level", "1");
    Change_level("1");
  }
});

mode_imp_parent.addEventListener("click", () => {
  if (!player) {
    mode_easy.checked = false;
    mode_hard.checked = false;
    mode_imp.checked = true;
    localStorage.setItem("level", "2");
    level = 2;
    Change_level("2");
  }
});

// ON startup

let load_level = localStorage.getItem("level");
let load_player = localStorage.getItem("player");
var level = load_level;
Change_level(load_level);

if (load_player == "0") {
  document.getElementById("mode-comp").checked = true;
  player = 0;
} else {
  document.getElementById("mode-player").checked = true;
  player = 1;
  level_display.textContent = "#Player-Mode";
  level_display.style.color = "#364fc7";
  level_display.style.textShadow = "0 0 18px white";
}
