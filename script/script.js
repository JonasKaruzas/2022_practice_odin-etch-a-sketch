const gameBoard = document.querySelector(".gameBoard");
const gameSize = document.querySelector("#size");

gameSize.addEventListener("input", () => {
  const sizeValue = document.querySelector("#sizeValue");
  sizeValue.innerText = gameSize.value;
});
