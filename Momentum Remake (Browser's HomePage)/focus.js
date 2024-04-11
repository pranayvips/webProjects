const img = document.getElementById("blur");

function checkDocumentFocus() {
  if (document.querySelector(":focus")) {
    img.setAttribute("class", "blury");
  } else {
    img.setAttribute("class", "background-image");
  }
}

setInterval(checkDocumentFocus, 300);
