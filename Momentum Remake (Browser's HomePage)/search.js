const btn1 = document.querySelector(".opt-img1");
const btn2 = document.querySelector(".opt-img2");
const btn3 = document.querySelector(".opt-img3");
const btn4 = document.querySelector(".opt-img4");
const btn5 = document.querySelector(".opt-img5");

// const btn2 = document.getElementById("searching_2");
const inputbox = document.getElementById("searchbar");

document.addEventListener("keypress",()=>{
  inputbox.focus()
})


function fun1() {
  if (String(inputbox.value).length > 1) {
    window.open("https://www.google.com/search?q=" + inputbox.value, "_self");
  } else {
    window.open("https://www.google.com/", "_self");
  }
}
function fun2() {
  if (String(inputbox.value).length > 1) {
    window.open(
      "https://www.youtube.com/results?search_query=" + inputbox.value,
      "_self"
    );
  } else {
    window.open("https://www.youtube.com/", "_self");
  }
}
function fun3() {
  if (String(inputbox.value).length > 1) {
    window.open("https://yandex.com/search/?text=" + inputbox.value, "_self");
  } else {
    window.open("https://www.yandex.com/", "_self");
  }
}
function fun4() {
  if (String(inputbox.value).length > 1) {
    window.open("https://sdmoviespoint.fyi/?s=" + inputbox.value, "_self");
  } else {
    window.open("https://sdmoviespoint.fyi/", "_self");
  }
}
function fun5() {
  window.open("https://www.udemy.com/home/my-courses/learning/", "_self");
}
btn1.addEventListener("click", fun1);
btn2.addEventListener("click", fun2);
btn3.addEventListener("click", fun3);
btn4.addEventListener("click", fun4);
btn5.addEventListener("click", fun5);
// const texts = document.getElementById("google_search")
// document.getElementById('google_search').onclick = function() {
//     window.open('http://google.com/search?q='+texts.texts);
// };


inputbox.addEventListener("focus",()=>{
  inputbox.style.width = "800px";
});
inputbox.addEventListener("focusout",()=>{
  inputbox.style.width = "500px";
});