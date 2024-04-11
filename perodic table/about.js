let a = document.getElementsByClassName("name");
let vals = document.getElementsByClassName("kota");
let blur = document.getElementsByClassName("blur")[0];
let info_scr = document.getElementsByClassName("dev-info")[0];
let close = document.getElementById("clos");
let obj = {
  0: [
    "ANSH",
    "7065725012",
    "anshgoud8208@gmail.com",
    "Sarvodaya co-ed vidyalaya",
  ],
  1: [
    "Bhavye Arora ",
    "9870515775",
    "bhavyearora19@gmail.com",
    "khulachi hansraj model school",
  ],
  2: [
    "Harsh",
    "8447218903",
    "harshsingh70747@gmail.com",
    "Rajkiya Sarvodhaya Vidhalaya",
  ],
  3: [
    "Pranay Prasad",
    "6203241318",
    "prasadpranay@gmail.com",
    "Kendriya Vidyalaya Thane",
  ],
  4: [
    "Swaraj Mahto",
    "9013704908",
    "swarajmahto1234@gmail.com",
    "Bengali Senior Secondary School",
  ],
};
for (let i in a) {
  try {
    a[i].addEventListener("click", () => {
      info_scr.style.display = "block";
      blur.style.display = "block";
      vals[0].textContent = obj[i][0];
      vals[1].textContent = obj[i][1];
      vals[2].textContent = obj[i][2];
      vals[3].textContent = obj[i][3];
    });
  } catch {}
}

close.addEventListener("click", () => {
  info_scr.style.display = "none";
  blur.style.display = "none";
});
