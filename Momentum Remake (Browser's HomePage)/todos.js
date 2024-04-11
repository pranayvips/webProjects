let da = localStorage.getItem("To-Do");

da = da.split(";;;");
let LIST = [];
for (let i = 0; i < da.length; i++) {
  if (da[i]) {
    LIST.push(da[i]);
  }
}

var d1 = document.getElementById("todoups");

for (i in LIST) {
  let button = document.createElement("button");
  let butnode = document.createTextNode("");
  button.appendChild(butnode);
  button.setAttribute("class", "todo_hidden");
  button.setAttribute("id", "todo-button");
  //   button.style.borderBottom = "1px solid white";
  button.style.gridColumn = 1;
  button.addEventListener("click", () => {
    button.setAttribute("id", "unseen");
    let next_sibling = button.nextElementSibling;
    next_sibling.setAttribute("id", "unseen");
    let values = next_sibling.textContent;

    let LIST = localStorage.getItem("To-Do");
    LIST = LIST.split(";;;");
    let to_add = "";
    for (let i = 0; i < LIST.length; i++) {
      if (LIST[i] === values) {
        LIST.splice(i, 1);
      } else {
        to_add += LIST[i] + ";;;";
      }
    }
    localStorage.setItem("To-Do", to_add);
  });
  d1.appendChild(button);

  let para = document.createElement("p");
  let node = document.createTextNode(LIST[i]);
  para.appendChild(node);
  para.setAttribute("class", "todo_hidden");
  para.style.paddingLeft = "10px";
  para.style.gridColumn = 2;
  para.style.borderBottom = "1px solid white";
  d1.appendChild(para);
}
