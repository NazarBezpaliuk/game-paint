const brown = document.querySelector("#brown");
const green = document.querySelector("#green");
const black = document.querySelector("#black");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");
const gray = document.querySelector("#gray");
const roof = document.querySelector("#roof");
const wall = document.querySelector("#wall");
const door = document.querySelector("#door");
const windowss = document.querySelector("#window");
const selectColor = document.querySelector("#select-color");

let saveColor;

const brownColor = () => {
  saveColor = "#301d0c";
  selectColor.style.backgroundColor = saveColor;
};
const greenColor = () => {
  saveColor = "#6df54e";
  selectColor.style.backgroundColor = saveColor;
};
const blackColor = () => {
  saveColor = "#000";
  selectColor.style.backgroundColor = saveColor;
};
const blueColor = () => {
  saveColor = "#a9edf3";
  selectColor.style.backgroundColor = saveColor;
};
const yellowColor = () => {
  saveColor = "#f4e363";
  selectColor.style.backgroundColor = saveColor;
};
const redColor = () => {
  saveColor = "#f63636";
  selectColor.style.backgroundColor = saveColor;
};
const grayColor = () => {
  saveColor = "#575656";
  selectColor.style.backgroundColor = saveColor;
};
const cleanColor = () => {
  saveColor = "#fff";
  selectColor.style.backgroundColor = saveColor;
};
brown.addEventListener("click", brownColor);
green.addEventListener("click", greenColor);
black.addEventListener("click", blackColor);
blue.addEventListener("click", blueColor);
yellow.addEventListener("click", yellowColor);
red.addEventListener("click", redColor);
gray.addEventListener("click", grayColor);
selectColor.addEventListener("click", cleanColor);

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
