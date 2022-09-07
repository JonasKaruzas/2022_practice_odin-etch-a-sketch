const colorValue = document.querySelector("#color");
const brushBtn = document.querySelector("#brushBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const resetBtn = document.querySelector("#resetBtn");
const gameSize = document.querySelector("#size");
const gameBoard = document.querySelector(".gameBoard");
const colorToggle = document.querySelector("#colorToggle");

let colorEraserToggle = colorToggle.checked;

const updateBoardSize = () => {
  const sizeValue = document.querySelector("#sizeValue");
  sizeValue.innerText = `${gameSize.value} x ${gameSize.value}`;
  gameBoard.innerHTML = null;
  createBoard(gameSize.value, drawBox);
};

const drawBox = (e) => {
  if (colorEraserToggle) {
    e.target.style.backgroundColor = colorValue.value;
  } else {
    e.target.style.backgroundColor = "darkgrey";
  }
};

const createBoard = (size, clickHandler) => {
  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", clickHandler);
      row.append(cell);
    }
    container.append(row);
  }
  gameBoard.append(container);
};

resetBtn.addEventListener("click", () => {
  updateBoardSize();
});

gameSize.addEventListener("input", () => {
  updateBoardSize();
});

colorToggle.addEventListener("change", (e) => {
  colorEraserToggle = e.target.checked;
});

updateBoardSize();
