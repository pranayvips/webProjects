// localStorage.setItem(
//   "Bookmarks",
//   "Google,,,https://www.google.com/;;;Clasher,,,https://clasher.pythonanywhere.com/"
// );

var book_LIST = localStorage.getItem("Bookmarks");
book_LIST = book_LIST.split(";;;");
var delete_bookmarks = 0;
var rename_bookmarks = 0;
var d3 = document.getElementById("bookmarks_ups");
var book_delete = document.getElementById("delete");
var book_rename = document.getElementById("rename");
var book_add = document.getElementById("add");
var bookmarks_p = document.getElementById("bookmarks_p");
var addbookmark = document.getElementById("bookmark_adder");
var addbookmark_container = document.getElementById("add_bookmark");
var renames = "";
var container = document.getElementById("container");

for (i in book_LIST) {
  if (String(book_LIST[i]).length > 1) {
    let button = document.createElement("button");
    let use = book_LIST[i].split(",,,");
    let butnode = document.createTextNode(use[0]);
    button.appendChild(butnode);
    button.setAttribute("id", "bookmarks-button");
    button.addEventListener("click", () => {
      if (!delete_bookmarks && !rename_bookmarks) {
        window.open(use[1], "_self");
      } else if (delete_bookmarks) {
        let aaja = "";
        for (i in book_LIST) {
          let d = book_LIST[i].split(",,,");
          if (d[0] === use[0]) {
          } else {
            aaja += book_LIST[i] + ";;;";
          }
        }
        localStorage.setItem("Bookmarks", aaja);
        button.setAttribute("id", "unseen");
      } else if (rename_bookmarks) {
        renames = use;
        to_search_or_bookmark = 1;
        inputbox.style.background = "rgb(0, 0, 0)";
        inputbox.setAttribute("placeholder", "New name for " + use[0]);
        rename_bookmarks = 0;
        bookmarks_other.setAttribute("class", "Bookmarks_hidden");
        bookmark_open = 0;
        bookmark_icon.style.stroke = "#fff";
        bookmark_icon.style.backgroundColor = "transparent";
      }
    });
    d3.appendChild(button);
  }
}

book_delete.addEventListener("click", () => {
  if (!delete_bookmarks) {
    book_delete.style.stroke = "#1c7ed6";
    book_delete.style.boxShadow = "0 2px 0 #1c7ed6";
    delete_bookmarks = 1;
  } else {
    delete_bookmarks = 0;
    book_delete.style.stroke = "white";
    book_delete.style.boxShadow = "none";
  }
});

book_rename.addEventListener("click", () => {
  if (!rename_bookmarks) {
    book_rename.style.stroke = "#1c7ed6";
    book_rename.style.boxShadow = "0 2px 0 #1c7ed6";
    rename_bookmarks = 1;
  } else {
    rename_bookmarks = 0;
    book_rename.style.stroke = "white";
    book_rename.style.boxShadow = "none";
  }
});

addbookmark.addEventListener("click", () => {
  addbookmark_container.setAttribute("class", "add_bookmark");
  bookmarks_other.setAttribute("class", "Bookmarks_hidden");
  bookmark_open = 0;
  bookmark_icon.style.stroke = "#fff";
  bookmark_icon.style.backgroundColor = "transparent";
  bookmarks_p.setAttribute("id", "bookmarks_p");
  container.style.filter = "blur(4px) brightness(0.45)";
});

var bookmark_icon = document.getElementById("bookmarks_icon");
var bookmarks_other = document.getElementById("bookmarks_other");
var bookmark_open = 0;
bookmark_icon.addEventListener("click", () => {
  if (!bookmark_open) {
    bookmark_open = 1;
    bookmarks_other.setAttribute("class", "bookmarks_others");
    bookmark_icon.style.stroke = "#fff";
    bookmark_icon.style.fill = "#212529";
    bookmarks_p.setAttribute("id", "bookmarks_pa");
  } else {
    bookmarks_other.setAttribute("class", "Bookmarks_hidden");
    bookmark_open = 0;
    bookmark_icon.style.stroke = "#fff";
    bookmark_icon.style.backgroundColor = "transparent";
    bookmark_icon.style.fill = "none";
    bookmarks_p.setAttribute("id", "bookmarks_p");
  }
});

var remove = document.getElementById("remove");
var save = document.getElementById("save");
var title = document.getElementById("title");
var link = document.getElementById("link");

remove.addEventListener("click", () => {
  addbookmark_container.setAttribute("class", "add_bookmark_no");
  container.style.filter = "none";
  container.style.filter = "none";
  title.value = "";
  link.value = "";
});

save.addEventListener("click", () => {
  if (String(title.value).length > 1 && String(link.value).length > 1) {
    addbookmark_container.setAttribute("class", "add_bookmark_no");
    container.style.filter = "none";
    container.style.filter = "none";
    book_LIST = localStorage.getItem("Bookmarks");
    let a = title.value;
    let b = link.value;
    book_LIST = book_LIST + ";;;" + a + ",,," + b;
    localStorage.setItem("Bookmarks", book_LIST);

    let button = document.createElement("button");
    let butnode = document.createTextNode(a);
    button.appendChild(butnode);
    button.setAttribute("id", "bookmarks-button");
    button.addEventListener("click", () => {
      if (!delete_bookmarks && !rename_bookmarks) {
        window.open(b, "_self");
      } else if (delete_bookmarks) {
        let aaa = "";
        for (i in book_LIST) {
          if (book_LIST[i][0] === a) {
          } else {
            aaa += book_LIST[i] + ";;;";
          }
        }
        localStorage.setItem("Bookmarks", aaa);
        button.setAttribute("id", "unseen");
      } else if (rename_bookmarks) {
        renames = a + ",,," + b;
        to_search_or_bookmark = 1;
        inputbox.style.background = "rgb(0, 0, 0)";
        inputbox.setAttribute("placeholder", "New name for " + a);
        rename_bookmarks = 0;
        bookmarks_other.setAttribute("class", "Bookmarks_hidden");
        bookmark_open = 0;
        bookmark_icon.style.stroke = "#fff";
        bookmark_icon.style.backgroundColor = "transparent";
      }
    });
    d3.appendChild(button);
    title.value = "";
    link.value = "";
  }
});
