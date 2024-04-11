let table_finder = document.getElementsByClassName("table-finder")[0];
let table_finder_bottom = document.getElementsByClassName(
  "table-finder-bottom"
)[0];
let List_finder = [
  ["H"],
  ["He"],
  ["Li"],
  ["Be"],
  ["B"],
  ["C"],
  ["N"],
  ["O"],
  ["F"],
  ["Ne"],
  ["Na"],
  ["Mg"],
  ["Al"],
  ["Si"],
  ["P"],
  ["S"],
  ["Cl"],
  ["Ar"],
  ["K"],
  ["Ca"],
  ["Sc"],
  ["Ti"],
  ["V"],
  ["Cr"],
  ["Mn"],
  ["Fe"],
  ["Co"],
  ["Ni"],
  ["Cu"],
  ["Zn"],
  ["Ga"],
  ["Ge"],
  ["As"],
  ["Se"],
  ["Br"],
  ["Kr"],
  ["Rb"],
  ["Sr"],
  ["Y"],
  ["Zr"],
  ["Nb"],
  ["Mo"],
  ["Tc"],
  ["Ru"],
  ["Rh"],
  ["Pd"],
  ["Ag"],
  ["Cd"],
  ["In"],
  ["Sn"],
  ["Sb"],
  ["Te"],
  ["I"],
  ["Xe"],
  ["Cs"],
  ["Ba"],
  ["La"],
  ["Ce"],
  ["Pr"],
  ["Nd"],
  ["Pm"],
  ["Sm"],
  ["Eu"],
  ["Gd"],
  ["Tb"],
  ["Dy"],
  ["Ho"],
  ["Er"],
  ["Tm"],
  ["Yb"],
  ["Lu"],
  ["Hf"],
  ["Ta"],
  ["W"],
  ["Re"],
  ["Os"],
  ["Ir"],
  ["Pt"],
  ["Au"],
  ["Hg"],
  ["Tl"],
  ["Pb"],
  ["Bi"],
  ["Po"],
  ["At"],
  ["Rn"],
  ["Fr"],
  ["Ra"],
  ["Ac"],
  ["Th"],
  ["Pa"],
  ["U"],
  ["Np"],
  ["Pu"],
  ["Am"],
  ["Cm"],
  ["Bk"],
  ["Cf"],
  ["Es"],
  ["Fm"],
  ["Md"],
  ["No"],
  ["Lr"],
  ["Rf"],
  ["Db"],
  ["Sg"],
  ["Bh"],
  ["Hs"],
  ["Mt"],
  ["Ds"],
  ["Rg"],
  ["Cn"],
  ["Nh"],
  ["Fl"],
  ["Mc"],
  ["Lv"],
  ["Ts"],
  ["Og"],
];

let shw = document.getElementsByClassName("shw");
let show_score = document.getElementById("show-score");
function corrects() {
  shw[0].style.color = "#37b24d";
  shw[1].style.color = "#69db7c";
  shw[0].textContent = "Correct";
  shw[1].textContent = "You got +100";
  show_score.style.display = "grid";
  show_score.style.animation = "come 1s";
  setTimeout(() => {
    show_score.style.animation = "come1 1s";
    setTimeout(() => {
      show_score.style.display = "none";
    }, 1000);
  }, 2000);
}
function wrongs() {
  shw[0].style.color = "#f03e3e";
  shw[1].style.color = "#ff6b6b";
  shw[0].textContent = "Wrong One!";
  shw[1].textContent = "-50 Deducted";
  show_score.style.display = "grid";
  show_score.style.animation = "come 1s";
  setTimeout(() => {
    show_score.style.animation = "come1 1s";
    setTimeout(() => {
      show_score.style.display = "none";
    }, 1000);
  }, 1500);
}
function locator() {
  // this will place the winning icon or display
  let b = window.scrollY;
  show_score.style.top = b + "px";
}
function create_ele(symbol, where) {
  let ele = document.createElement("div");
  ele.setAttribute("name", "symbol");

  let symbols = document.createElement("h1");
  symbols.appendChild(document.createTextNode(symbol));
  symbols.setAttribute("class", "game-symbol");

  ele.appendChild(symbols);

  ele.addEventListener("click", () => {
    console.log(finder_score);
    locator();
    if (finder_current == symbol) {
      finder_score = parseInt(finder_score) + 100;
      clearInterval(new_timer);
      set_finder();
      corrects();
    } else {
      update_score();
      finder_score = parseInt(finder_score) - 50;
      wrongs();
    }
  });

  if (where == 0) {
    table_finder.appendChild(ele);
  } else {
    table_finder_bottom.appendChild(ele);
  }
}
function create_blank(where) {
  let ele = document.createElement("div");
  ele.setAttribute("class", "blank");
  if (where == 0) {
    table_finder.appendChild(ele);
  } else {
    table_finder_bottom.appendChild(ele);
  }
}

let k_finder = 0;

let u_finder = 0;
for (u_finder = 0; u_finder < 156; u_finder++) {
  if (
    (u_finder >= 1 && u_finder <= 16) ||
    (u_finder >= 20 && u_finder <= 29) ||
    (u_finder >= 38 && u_finder <= 47) ||
    u_finder == 92 ||
    u_finder == 125
  ) {
    create_blank(0);
  } else if (
    (u_finder >= 92 && u_finder <= 107) ||
    (u_finder >= 126 && u_finder <= 140)
  ) {
    if (u_finder == 92 || u_finder == 93 || u_finder == 126) {
      create_blank(1);
      create_blank(1);
      if (u_finder == 126) {
        create_blank(1);
      }
    }
    create_ele(List_finder[k_finder][0], 1);
    k_finder += 1;
  } else {
    create_ele(
      List_finder[k_finder][0],

      0
    );
    k_finder += 1;
  }
}

let quiz_options = document.getElementsByClassName("quiz-options");
for (let i of quiz_options) {
  i.nextElementSibling.addEventListener("click", () => {
    i.checked = true;
  });
}
