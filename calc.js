let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let s = "";

// عشان يلف على كل الازار
buttons.forEach(function (btn) {
  // عشان لما اتك على زرار
  btn.addEventListener("click", function (e) {
    let btntext = e.target.innerText;

    if (btntext === "AC") {
      s = "";
      screen.value = "";
    } else if (btntext === "DEL") {
      s = s.slice(0, -1);
      screen.value = s;
    } else if (btntext === "=") {
      try {
        screen.value = eval(s);
      } catch {
        screen.value = "Error";
        s = "";
      }
    } else {
      s += btntext;
      screen.value = s;
    }
  });
});
