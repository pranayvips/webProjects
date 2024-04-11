var feed_options = document.getElementsByClassName("feed-choose");
var feed_select = document.getElementsByClassName("feed-select")[0];
var feed_load = localStorage.getItem("feed");
var feed_clicked = 0;
var feed_data = {
  1: ["Excellent! Loved it..", "128512"],
  2: ["Good! Great..", "128578"],
  3: ["Satisfactory..", "128528"],
  4: ["Could be a lot better..", "128577"],
  5: ["I am not interested yr..", "128529"],
};

if (feed_load == null) {
  for (let i of feed_options) {
    i.addEventListener("mouseover", () => {
      if (!feed_clicked) {
        let name = i.getAttribute("name");
        switch (name) {
          case "1":
            feed_select.textContent = feed_data["1"][0];
            break;
          case "2":
            feed_select.textContent = feed_data["2"][0];
            break;
          case "3":
            feed_select.textContent = feed_data["3"][0];
            break;
          case "4":
            feed_select.textContent = feed_data["4"][0];
            break;
          case "5":
            feed_select.textContent = feed_data["5"][0];
            break;

          default:
            feed_select.textContent = "|";
            break;
        }
      }
    });
    i.addEventListener("mouseout", () => {
      if (!feed_clicked) {
        feed_select.textContent = "|";
      }
    });
    i.addEventListener("click", () => {
      feed_clicked = 1;
      i.style.borderBottom = "1px solid white";
      document.getElementsByClassName("before")[0].style.animation =
        "feed_hide 2s linear";
      setTimeout(() => {
        document.getElementsByClassName("before")[0].style.display = "none";
        document.getElementsByClassName("after")[0].style.display = "block";
        document.getElementsByClassName("after")[0].style.animation =
          "feed_show 2s linear";
      }, 2000);

      localStorage.setItem(
        "feed",
        feed_data[i.getAttribute("name")][0] +
          ";;;" +
          feed_data[i.getAttribute("name")][1]
      );
    });
  }
} else {
  feed_load = feed_load.split(";;;");
  feed_options[5].textContent = String.fromCodePoint(parseInt(feed_load[1]));
  document.getElementsByClassName("feed-select")[1].innerHTML = feed_load[0];
  document.getElementsByClassName("before")[0].style.display = "none";
  document.getElementsByClassName("after")[0].style.display = "block";
  document.getElementsByClassName("after")[0].style.animation =
    "feed_show 2s linear";
}
