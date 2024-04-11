let game_finder = document.getElementsByClassName("game-finder")[0];
let game_ask_screen = document.getElementsByClassName("ask")[0];
game_finder.addEventListener("click", () => {
  game_ask_screen.style.display = "none";
  home_page = 2;
  document.getElementsByClassName("finder")[0].style.display = "block";
  try {
    clearInterval(new_timer);
  } catch {}
  finder_score = 0;
  update_score();
  document.getElementsByClassName("finder-mid")[0].style.display = "grid";
  document.getElementsByClassName("finder-start")[0].style.display = "none";
});
let game_quiz = document.getElementsByClassName("game-quiz")[0];
game_quiz.addEventListener("click", () => {
  game_ask_screen.style.display = "none";
  home_page = 3;
  document.getElementsByClassName("quiz")[0].style.display = "block";
  document.getElementsByClassName("ques")[0].style.display = "block";
  document.getElementsByClassName("q-result")[0].style.display = "none";
});

function quiz_submit() {
  let name = document
    .getElementsByClassName("ques")[0]
    .getElementsByTagName("input");
  let list = [];
  let temp = [];
  let k = 1;
  let u = 0;
  for (let i of name) {
    if (k / 4 == 1) {
      list.push(u - 1);
      k = 1;
      u = 0;
    } else {
      if (i.checked) {
        temp.push(1);
        u = k;
      } else {
        temp.push(0);
      }
      k += 1;
    }
  }
  let ans = [1, 2, 2, 1, 1, 3, 1, 2];
  let score = 0;
  let left = 0;
  let right = 0;
  let wrong = 0;
  for (let i in ans) {
    if (list[i] == -1) {
      left += 1;
    } else if (list[i] != ans[i]) {
      wrong += 1;
    } else if (list[i] == ans[i]) {
      right += 1;
    }
  }
  score = right * 4 - left;
  let put = document.getElementsByClassName("q-res-");

  put[0].textContent = 8 - left;
  put[1].textContent = right + " / " + wrong;
  put[2].textContent = score;
  console.log(score);
}

document.getElementById("submit").addEventListener("click", () => {
  quiz_submit();
  document.getElementsByClassName("ques")[0].style.display = "none";
  document.getElementsByClassName("q-result")[0].style.display = "block";
});
document.getElementById("re-test").addEventListener("click", () => {
  document.getElementsByClassName("ques")[0].style.display = "block";
  document.getElementsByClassName("q-result")[0].style.display = "none";
});

let finder_back = document.getElementsByClassName("finder-back");
finder_back[0].addEventListener("click", () => {
  document.getElementsByClassName("finder")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
  game_ask_screen.style.display = "block";
  clearInterval(new_timer);
});
finder_back[1].addEventListener("click", () => {
  document.getElementsByClassName("finder")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
  game_ask_screen.style.display = "block";
  clearInterval(new_timer);
});
let finder_current = "";
let finder_score = 0;
function set_difficulty() {
  let lvl = document.getElementById("lvl").value;
  let symbol = document.getElementsByClassName("game-symbol");
  let level = document.getElementById("level");
  if (lvl == 1) {
    level.textContent = "Level : Hard";
    for (let i of symbol) {
      i.style.opacity = "0";
    }
  } else {
    level.textContent = "Level : Easy";
    for (let i of symbol) {
      i.style.opacity = "1";
    }
  }
}
document.getElementById("play").addEventListener("click", () => {
  document.getElementsByClassName("finder-mid")[0].style.display = "none";
  document.getElementsByClassName("finder-start")[0].style.display = "block";
  set_finder();
  set_difficulty();
});
function update_score() {
  document.getElementById("finder-score").textContent = finder_score;
}
let new_timer;
function set_finder() {
  update_score();
  let rand = rand_num();
  let list = [List[rand][2], List[rand][3]];
  finder_current = list[0];
  document.getElementById("finder-guess").textContent = list[1];
  new_timer = setInterval(() => {
    finder_score = parseInt(finder_score) - 3;
    update_score();
  }, 3000);
}
function rand_num() {
  return Math.floor(Math.random() * (118 - 1 + 1) + 1);
}
document.getElementById("search-button").addEventListener("click", () => {
  let value = document.getElementById("search-input").value;
  let found = 0;
  if (value.length > 1) {
    for (let i of List) {
      for (let j of i) {
        if (j.toLowerCase().includes(value)) {
          found = 1;
          var node = document.querySelector('[title="' + i[3] + '"]');
          node.style.transform = "scale(1.4)";
          node.style.zIndex = "10";
          setTimeout(() => {
            node.style.transform = "scale(1)";
            node.style.zIndex = "1";
            node.addEventListener("mouseover", () => {
              node.style.transform = "scale(1.4)";
              node.style.zIndex = "10";
            });
            node.addEventListener("mouseout", () => {
              node.style.transform = "scale(1)";
              node.style.zIndex = "1";
            });
          }, 3500);
        }
      }
    }
  }
  if (found == 0) {
    alert(
      'You searched for "' + value + '" ; \n And we are unable to find it.'
    );
  }
  document.getElementById("search-input").value = "";
});

document.getElementById("download").addEventListener("click", () => {
  location.href = "/perodic_elements_properties.csv";
});

function close_detail() {
  document.getElementsByClassName("blur")[0].style.display = "none";
  document.getElementsByClassName("vid")[0].style.display = "none";
  document.getElementsByTagName("video")[0].pause();

  setTimeout(() => {
    document.getElementsByClassName("show-data")[0].style.display = "none";
  }, 650);
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementsByClassName("show-data")[0].style.animation = "come1 1s";
  close_detail();
});
document.getElementsByClassName("blur")[0].addEventListener("click", () => {
  document.getElementsByClassName("show-data")[0].style.animation = "come1 .7s";
  close_detail();
});

document.getElementById("download-1").addEventListener("click", () => {
  document.getElementsByClassName("blur")[0].style.display = "block";
  document.getElementsByClassName("vid")[0].style.display = "block";
  document.getElementsByTagName("video")[0].play();
});
