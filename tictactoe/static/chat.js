var old_val = "";
let parent = document.getElementsByClassName("chat-show")[0];

function msg_adder(name, msg, send) {
  let chatting = document.createElement("div");
  chatting.setAttribute("class", "chatting");

  let names = document.createElement("p");
  names.appendChild(document.createTextNode(name));
  let msgs = document.createElement("p");
  msgs.appendChild(document.createTextNode(msg));

  chatting.appendChild(names);
  chatting.appendChild(msgs);

  parent.appendChild(chatting);

  parent.scrollTo(0, parent.scrollHeight);
  if (!send) {
    const request = new XMLHttpRequest();
    request.open("POST", `/${JSON.stringify(name + ";-,-;" + msg)}`);
    request.send();
    request.addEventListener("load", reqListener);

    function reqListener() {}
  }
}

function update_chat() {
  const request = new XMLHttpRequest();
  request.open("POST", `/${JSON.stringify("to")}`);
  request.send();
  request.addEventListener("load", reqListener);
  function reqListener() {
    let val = this.responseText;
    if (val.length > 1) {
      if (old_val != val) {
        old_val = val;
        String(val).replace(old_val, "");
        val = val.split("/;/");
        for (let i of val) {
          if (i.includes(";-,-;")) {
            i = i.split(";-,-;");
            msg_adder(i[0], i[1], 1);
          }
        }
      }
    }
  }
  // var new_msg = JSON.parse("{{ newmsg | tojson }}");
  // console.log(new_msg);
}
update_chat();
parent.scrollTo(0, parent.scrollHeight);
setInterval(() => {
  update_chat();
  parent.scrollTo(0, parent.scrollHeight);
}, 10000);

document.getElementById("msg-send").addEventListener("click", () => {
  let name = localStorage.getItem("login");
  let msg = document.getElementById("msg-input");
  if (msg.value.length > 1) {
    msg_adder(name, msg.value, 0);
    msg.value = "";
  }
});
