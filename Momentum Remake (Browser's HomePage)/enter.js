var to_search_or_todo = 0;
var to_search_or_bookmark = 0;
document.addEventListener("keypress", function (e) {
  if (
    (e.keyCode === 13 || e.which === 13) &&
    !to_search_or_todo &&
    !to_search_or_bookmark
  ) {
    e.preventDefault();
    const inbox = document.getElementById("searchbar");
    if (String(inbox.value).length > 1) {
      window.open("https://www.google.com/search?q=" + inputbox.value, "_self");
    }
  } else if ((e.keyCode === 13 || e.which === 13) && to_search_or_todo) {
    let Bookmark_read = localStorage.getItem("To-Do");
    if (String(inputbox.value).length > 1) {
      localStorage.setItem("To-Do", Bookmark_read + ";;;" + inputbox.value);
    }
  } else if ((e.keyCode === 13 || e.which === 13) && to_search_or_bookmark) {
    let Bookmark_read = localStorage.getItem("Bookmarks");
    Bookmark_read = Bookmark_read.split(";;;");
    if (String(inputbox.value).length > 1) {
      let a = "";
      for (i in Bookmark_read) {
        let use = Bookmark_read[i].split(",,,");
        if (use[0] === renames[0]) {
          a += inputbox.value + ",,," + renames[1] + ";;;";
        } else {
          a += Bookmark_read[i] + ";;;";
        }
      }
      localStorage.setItem("Bookmarks", a);
      // localStorage.setItem("Bookmarks", Bookmark_read + ";;;" + inputbox.value);
    }
  }
});
