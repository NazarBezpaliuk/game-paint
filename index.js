const roof = document.querySelector("#roof");
const wall = document.querySelector("#wall");
const door = document.querySelector("#door");
const windowss = document.querySelector("#window");
const resetBtn = document.querySelector("#reset-btn");
const colorg = document.querySelector("#tyui");
const ccc = document.querySelector("#tyu");
const colort = document.querySelector("#colort");
const nextBtn = document.querySelector("#btn-next");
const smile = document.querySelector("#smile");
const bodySmile = document.querySelector("#cirkle-smile");
const eyseLeft = document.querySelector("#eyse-left");
const eyseRight = document.querySelector("#eyse-right");
const smileBottom = document.querySelector("#smile_bottom");
const prewBtn = document.querySelector("#btn-prew");

let saveColor = colorg.value;
colort.style.border = `15px solid ${saveColor}`;

let roofPosition = -50;
let wallPosition = -50;
let windowPosition = -150;
let doorPosition = 0;
let smilePosition = 950;

const nextSlide = () => {
  roofPosition += -1000;
  wallPosition += -1000;
  windowPosition += -1000;
  doorPosition += -1000;
  smilePosition += -1000;
  smile.style.transform = `translate(${smilePosition}%, -40%)`;
  roof.style.transform = `translate(${roofPosition}%, -200%) perspective(120px) rotateX(45deg)`;
  wall.style.transform = `translate(${wallPosition}%, -35%)`;
  windowss.style.transform = `translate(${windowPosition}%, -50%)`;
  door.style.transform = `translate(${doorPosition}%, -6px)`;
};

const prewSlide = () => {
  roofPosition -= -1000;
  wallPosition -= -1000;
  windowPosition -= -1000;
  doorPosition -= -1000;
  smilePosition -= -1000;
  smile.style.transform = `translate(${smilePosition}%, -40%)`;
  roof.style.transform = `translate(${roofPosition}%, -200%) perspective(120px) rotateX(45deg)`;
  wall.style.transform = `translate(${wallPosition}%, -35%)`;
  windowss.style.transform = `translate(${windowPosition}%, -50%)`;
  door.style.transform = `translate(${doorPosition}%, -6px)`;
};

nextBtn.addEventListener("click", nextSlide);
prewBtn.addEventListener("click", prewSlide);

const changeCCC = () => {
  saveColor = `${colorg.value}`;
  colort.style.border = `15px solid ${saveColor}`;
};
colorg.addEventListener("input", changeCCC);

const bodyColor = () => {
  bodySmile.style.backgroundColor = saveColor;
};
const eyseLeftColor = () => {
  eyseLeft.style.backgroundColor = saveColor;
};
const eyseRightColor = () => {
  eyseRight.style.backgroundColor = saveColor;
};
const smileColor = () => {
  smileBottom.style.backgroundColor = saveColor;
};
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

bodySmile.addEventListener("click", bodyColor);
eyseLeft.addEventListener("click", eyseLeftColor);
eyseRight.addEventListener("click", eyseRightColor);
smileBottom.addEventListener("click", smileColor);
roof.addEventListener("click", roofColor);
wall.addEventListener("click", wallColor);
door.addEventListener("click", doorColor);
windowss.addEventListener("click", windowssColor);

const resetColor = () => {
  roof.style.backgroundColor = "#fff";
  wall.style.backgroundColor = "#fff";
  door.style.backgroundColor = "#fff";
  windowss.style.backgroundColor = "#fff";
  bodySmile.style.backgroundColor = "#fff";
  eyseLeft.style.backgroundColor = "#fff";
  eyseRight.style.backgroundColor = "#fff";
  smileBottom.style.backgroundColor = "#fff";
};
resetBtn.addEventListener("click", resetColor);
