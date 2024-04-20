function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxesEl = document.querySelector("div#boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  
  for (let i = 0; i < amount; i++) {
    const newElDiv = document.createElement("div");
    newElDiv.classList.add("boxes-items");
    const color = getRandomHexColor();
    newElDiv.style.backgroundColor = color;
    newElDiv.style.width = `${width}px`;
    newElDiv.style.height = `${height}px`;

    boxesEl.appendChild(newElDiv);

    width = width + 10;
    height = height + 10;
  }
}

function destroyBoxes() {
  const destroyItems = document.querySelectorAll(".boxes-items");
  destroyItems.forEach(function callback(item) {
    item.remove();
  });
}

const btnCreate = document.querySelector("[data-create]");
btnCreate.addEventListener("click", handleClick);

function handleClick(event) {
  const inputEl = document.querySelector("input");
  const amount = inputEl.value;

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  }
}

const btnDestroy = document.querySelector("[data-destroy]");
btnDestroy.addEventListener("click", handleReset);
function handleReset(event) {
  destroyBoxes();
  
}