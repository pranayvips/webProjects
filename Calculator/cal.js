let result_display_element = document.getElementById("result-screen1");
let result_history_display = document.getElementById("history");
let operators = "+-x÷×%*/";
var history_all = [];
var history_on_of = 0;
var d3 = document.getElementById("history-screen");
var kunal_bug_wala_in_bracket = 0;
var equal_yes = 0;
result_display_element.value = "0";

function stableizing_font() {
  if (result_display_element.value.length > 28) {
    result_display_element.style.fontSize = "36px";
    result_display_element.value = "Bas kar bhai kitna likhega";
  } else if (result_display_element.value.length > 23) {
    result_display_element.style.fontSize = "25px";
  } else if (result_display_element.value.length > 19) {
    result_display_element.style.fontSize = "30px";
  } else if (result_display_element.value.length > 16) {
    result_display_element.style.fontSize = "35px";
  }
}

function put_click_number_values(abc) {
  if (result_display_element.value == "0" || equal_yes) {
    result_display_element.value = abc;
    equal_yes = 0;
  } else {
    result_display_element.value += abc;
  }
}

document.getElementById("0").addEventListener("click", () => {
  put_click_number_values("0");
});
document.getElementById("1").addEventListener("click", () => {
  put_click_number_values("1");
});
document.getElementById("2").addEventListener("click", () => {
  put_click_number_values("2");
});
document.getElementById("3").addEventListener("click", () => {
  put_click_number_values("3");
});
document.getElementById("4").addEventListener("click", () => {
  put_click_number_values("4");
});
document.getElementById("5").addEventListener("click", () => {
  put_click_number_values("5");
});
document.getElementById("6").addEventListener("click", () => {
  put_click_number_values("6");
});
document.getElementById("7").addEventListener("click", () => {
  put_click_number_values("7");
});
document.getElementById("8").addEventListener("click", () => {
  put_click_number_values("8");
});
document.getElementById("9").addEventListener("click", () => {
  put_click_number_values("9");
});
document.getElementById(".").addEventListener("click", () => {
  if (result_display_element.value == "0" || equal_yes) {
    result_display_element.value = "0.";
  } else {
    result_display_element.value += ".";
  }
});

document.getElementById("plus").addEventListener("click", () => {
  let result = result_display_element.value;
  if (operators.includes(result[result.length - 1])) {
    result_display_element.value = result.slice(0, result.length - 1) + "+";
  } else if (result != "0") {
    result_display_element.value += "+";
  }
});
document.getElementById("minus").addEventListener("click", () => {
  let result = result_display_element.value;
  if (operators.includes(result[result.length - 1])) {
    result_display_element.value = result.slice(0, result.length - 1) + "-";
  } else if (result_display_element.value == "0") {
    result_display_element.value = "-";
  } else if (result != "0") {
    result_display_element.value += "-";
  }
});
document.getElementById("multiply").addEventListener("click", () => {
  let result = result_display_element.value;
  if (operators.includes(result[result.length - 1])) {
    result_display_element.value = result.slice(0, result.length - 1) + "x";
  } else if (result_display_element.value != "0") {
    result_display_element.value += "×";
  }
});
document.getElementById("divide").addEventListener("click", () => {
  let result = result_display_element.value;
  if (operators.includes(result[result.length - 1])) {
    result_display_element.value = result.slice(0, result.length - 1) + "÷";
  } else if (result_display_element.value != "0") {
    result_display_element.value += "÷";
  }
});

function backspace() {
  let result = result_display_element.value;
  if (result[result.length - 1] == "(") {
    document.getElementById("(").textContent = "(";
    kunal_bug_wala_in_bracket = 0;
  }
  if (result != "0") {
    result_display_element.value = result.substr(0, result.length - 1);
  }
  if (result.length < 2) {
    result_display_element.value = "0";
  }
}
document.getElementById("%").addEventListener("click", () => {
  backspace();
});
document.getElementById("clear").addEventListener("click", () => {
  result_display_element.value = "0";
  result_history_display.textContent = "Ans = 0";
  result_display_element.style.fontSize = "40px";
});
document.getElementById("(").addEventListener("click", () => {
  if (!kunal_bug_wala_in_bracket) {
    let result = result_display_element.value;
    if (!operators.includes(result[result.length - 1])) {
      console.log(result[result.length - 1]);
      result_display_element.value += "x";
    }
    if (result_display_element.value == "0") {
      result_display_element.value = "(";
      document.getElementById("(").textContent = ")";
    } else {
      result_display_element.value += "(";
      document.getElementById("(").textContent = ")";
    }
    kunal_bug_wala_in_bracket = 1;
  } else {
    if (result_display_element.value == "0") {
      result_display_element.value = ")x";
      document.getElementById("(").textContent = "(";
    } else {
      result_display_element.value += ")x";
      document.getElementById("(").textContent = "(";
    }
    kunal_bug_wala_in_bracket = 0;
  }
});
document.getElementById("^").addEventListener("click", () => {
  if (result_display_element.value != "0") {
    result_display_element.value += "^";
  }
});

function equal() {
  try {
    equal_yes = 1;
    let textContent = result_display_element.value;
    if (operators.includes(textContent[textContent.length - 1])) {
      textContent = textContent.substring(0, textContent.length - 1);
    }
    let his1 = "";
    for (i in textContent) {
      if (textContent[i] == "^") {
        his1 += "**";
      } else if (["x", "×"].includes(textContent[i])) {
        his1 += "*";
      } else if (textContent[i] == "÷") {
        his1 += "/";
      } else if (textContent[i] == "%") {
        his1 = eval(his1).toString();
      } else {
        his1 += textContent[i];
      }
    }

    if (String(his1).includes("(") && !String(his1).includes(")")) {
      result_display_element.value += ")";
      his1 += ")";
    }
    let a = eval(his1);
    history_all.push(textContent + " = " + a.toString());
    if (String(textContent) == "0") {
      result_history_display.textContent = textContent + "Ans = 0";
    } else {
      result_history_display.textContent = textContent + " =";
    }
    if (String(a).includes(".")) {
      result_display_element.value = a.toFixed(2);
    } else {
      result_display_element.value = a;
    }
  } catch (err) {
    result_display_element.value = "Error";
    console.log(err);
  }
  stableizing_font();
}

document.getElementById("equal").addEventListener("click", () => {
  equal();
});

result_history_display.addEventListener("click", () => {
  navigator.clipboard.writeText(result_history_display.textContent);
  //   clipboarding happens here so come back here
});

document.getElementById("history_show").addEventListener("click", () => {
  if (!history_on_of) {
    document.getElementById("one-1").style.display = "none";
    d3.style.display = "block";
    d3.style.display = "flex";
    d3.style.flexDirection = "column";
    history_on_of = 1;
    for (let i of history_all) {
      let use = i.split("=");
      let his_text = document.createElement("p");
      let butnode = document.createTextNode(use[0]);
      his_text.appendChild(butnode);
      his_text.setAttribute("class", "cal_history_0");
      d3.appendChild(his_text);

      his_text = document.createElement("p");
      butnode = document.createTextNode("= " + use[1]);
      his_text.appendChild(butnode);
      his_text.setAttribute("class", "cal_history_1");
      d3.appendChild(his_text);
    }
    history_all.splice(0, history_all.length);
  } else {
    // document.getElementById("no-history-0").style.display = "block";
    // document.getElementById("no-history-1").style.display = "block";
    history_on_of = 0;
    document.getElementById("one-1").style.display = "block";
    d3.style.display = "none";
  }
});

document.addEventListener("keypress", (e) => {
  if ("1234567890+-*/.".includes(e.key)) {
    let result = result_display_element.value;
    if (
      operators.includes(result[result.length - 1]) &&
      operators.includes(e.key)
    ) {
      if (e.key == "/") {
        result_display_element.value =
          result.substring(0, result.length - 1) + "÷";
      } else if (e.key == "*") {
        result_display_element.value =
          result.substring(0, result.length - 1) + "x";
      } else {
        if (equal_yes) {
          result_display_element.value =
            result.substring(0, result.length - 1) + e.key;
          equal_yes = 0;
        } else {
          result_display_element.value = e.key;
        }
      }
    } else if (e.key == "/") {
      result_display_element.value += "÷";
    } else if (e.key == "*") {
      result_display_element.value += "x";
    } else if (result == "0") {
      result_display_element.value = e.key;
    } else {
      if (equal_yes) {
        result_display_element.value += e.key;
        equal_yes = 0;
      } else {
        result_display_element.value = e.key;
      }
    }
  } else if (e.key == "Enter") {
    equal();
  }
  stableizing_font();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    backspace();
  }
});
