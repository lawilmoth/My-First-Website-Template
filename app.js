const logo = document.getElementById("logo");

const area = document.getElementById("top");
area.style.backgroundColor = "blue";

function changeColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  area.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  logo.style.color = `rgb(${r}, ${g}, ${b})`;
  console.log("hi");
}
