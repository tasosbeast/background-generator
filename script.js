var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  let n2 = (Math.random() * 0xfffff * 1000000).toString(16);
  let hex = "#" + n.slice(0, 6);
  let hex2 = "#" + n2.slice(0, 6);
  color1.value = hex;
  color2.value = hex2;
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);
