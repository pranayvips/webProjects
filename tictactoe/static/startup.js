if (String(localStorage.getItem("login")) == "null") {
  start = document.getElementById("next").addEventListener("click", () => {
    let a = document.getElementById("name").value;
    if (a.length > 3) {
      localStorage.setItem("login", a);
      const today = new Date();
      localStorage.setItem(
        "date",
        today.getDate() +
          ",," +
          today.getMonth() +
          ",,2023" +
          ",," +
          today.getDay()
      );
      localStorage.setItem("score", "0,0");
      document.getElementsByClassName("login")[0].style.display = "none";
      document.getElementsByClassName("container")[0].style.display = "block";
      removeEventListener("click", start);
    } else {
      document.getElementsByClassName("error")[0].style.display = "block";
    }
  });
} else {
  document.getElementsByClassName("login")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "block";
}
