function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("button.change-color");
bodyColor.addEventListener("click", changeColor);


function changeColor() {
  const color = getRandomHexColor();
  const colorSpan = document.querySelector("span.color");
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

