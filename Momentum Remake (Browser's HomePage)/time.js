let display_time = document.querySelector(".time");
let d = new Date();
let hours = d.getHours();
let minute = d.getMinutes();
display_time.textContent = "00:00";
function start_ani() {
  let content = "00:00";
  let times = 0;
  let hourt = "";
  let mint = "";
  let ani = setInterval(() => {
    if (times > 59) {
      clearInterval(ani);
    } else {
      let content = "";
      if (times <= hours) {
        if (times.toString().length == 1) {
          content = "0" + times;
          hourt = content;
        } else {
          content = times.toString();
          hourt = content;
        }
      } else {
        content = hourt;
      }
      if (times <= minute) {
        if (times.toString().length == 1) {
          content += ":0" + times;
          mint = "0" + times;
        } else {
          content += ":" + times;
          mint = times;
        }
      } else {
        content += ":" + mint;
      }
      display_time.textContent = content;
      times++;
    }
  }, 50);
}
setTimeout(() => {
  start_ani();
}, 1000);

setInterval(() => {
  let d = new Date();
  let go = "";
  if (d.getHours().toString().length == 1) {
    go = "0" + d.getHours();
  } else {
    go = "" + d.getHours();
  }
  if (d.getMinutes().toString().length == 1) {
    go += ":0" + d.getMinutes();
  } else {
    go += ":" + d.getMinutes();
  }
  display_time.textContent = go;
}, 30000);
