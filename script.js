let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const placeMark = (cellIndex) => {
  if (!gameActive || gameState[cellIndex] !== "") return;

  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;

  if (checkWin()) {
    alert("Jugador " + currentPlayer + " Gana!");
    gameActive = false;
    return;
  }

  if (checkTie()) {
    alert("Empate!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const checkWin = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameState[a] !== "" &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
};

const checkTie = () => {
  return !gameState.includes("");
};

const resetBoard = () => {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];

  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
};

