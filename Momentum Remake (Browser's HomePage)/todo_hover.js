var todo_img = document.getElementById("todo_image");
var todo_p = document.getElementById("todo_p");
let todo_count = 0;
var todoups = document.getElementById("todoups");
function todo_hover() {
  if (!todo_count) {
    todo_p.setAttribute("id", "todo_p_show");
    let all_hidden = document.getElementsByClassName("todo_hidden");
    let i = 0;
    todoups.style.animation = "todo_grow 1s ease-in";
    while (i < all_hidden.length) {
      all_hidden[i].setAttribute("class", "todo_shown");
    }
    todoups.style.border = "2px solid white";

    todo_count = 1;
  } else {
    todo_p.setAttribute("id", "todo_p");
    todoups.style.border = "0";
    todo_count = 0;
    todoups.style.animation = "none";
    let i = 0;
    let all_shown = document.getElementsByClassName("todo_shown");
    while (i < all_shown.length) {
      all_shown[i].setAttribute("class", "todo_hidden");
    }
  }
}
todo_img.addEventListener("click", todo_hover);

let plus_button = document.getElementById("todo_plus");

plus_button.addEventListener("click", () => {
  inputbox.style.background = "rgb(0, 0, 0)";
  inputbox.setAttribute("placeholder", "Enter Your Next Task here");
  todo_p.setAttribute("id", "todo_p");
  todoups.style.border = "0";
  todo_count = 0;
  let i = 0;
  let all_shown = document.getElementsByClassName("todo_shown");
  while (i < all_shown.length) {
    all_shown[i].setAttribute("class", "todo_hidden");
  }
  to_search_or_todo = 1;
});


