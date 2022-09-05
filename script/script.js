const gameBoard = document.querySelector(".gameBoard");
const gameSize = document.querySelector("#size");

gameSize.addEventListener("input", () => {
  const sizeValue = document.querySelector("#sizeValue");
  sizeValue.innerText = `${gameSize.value} x ${gameSize.value}`;
  gameBoard.innerHTML = null;
  createBoard(gameSize.value, drawBox);
});

const drawBox = (e) => {
  if (e.buttons == 1) {
    e.target.style.backgroundColor = "red";
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
      cell.addEventListener("mousemove", clickHandler);
      row.append(cell);
    }
    container.append(row);
  }

  gameBoard.append(container);
};

createBoard(5, drawBox);
