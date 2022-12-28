// const brown = document.querySelector("#brown");
// const green = document.querySelector("#green");
// const black = document.querySelector("#black");
// const blue = document.querySelector("#blue");
// const yellow = document.querySelector("#yellow");
// const red = document.querySelector("#red");
// const gray = document.querySelector("#gray");
const roof = document.querySelector("#roof");
const wall = document.querySelector("#wall");
const door = document.querySelector("#door");
const windowss = document.querySelector("#window");
const resetBtn = document.querySelector("#reset-btn");
const colorg = document.querySelector("#tyui");
const ccc = document.querySelector("#tyu");
const colort = document.querySelector("#colort");

let saveColor = colorg.value;
colort.style.border = `15px solid ${saveColor}`;

const changeCCC = () => {
  saveColor = `${colorg.value}`;
  colort.style.border = `15px solid ${saveColor}`;
};
colorg.addEventListener("change", changeCCC);

const roofColor = () => {
  roof.style.backgroundColor = saveColor;
};
const wallColor = () => {
  wall.style.backgroundColor = saveColor;
};
const doorColor = () => {
  door.style.backgroundColor = saveColor;
};
const windowssColor = () => {
  windowss.style.backgroundColor = saveColor;
};

roof.addEventListener("click", roofColor);
wall.addEventListener("click", wallColor);
door.addEventListener("click", doorColor);
windowss.addEventListener("click", windowssColor);

const resetColor = () => {
  roof.style.backgroundColor = "#fff";
  wall.style.backgroundColor = "#fff";
  door.style.backgroundColor = "#fff";
  windowss.style.backgroundColor = "#fff";
};
resetBtn.addEventListener("click", resetColor);
