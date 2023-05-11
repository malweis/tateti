let currentPlayer = "";
let gameActive = false;
let playerXName = "";
let playerOName = "";
let humanVsComputer = false;


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

const startHumanVsComputerGame = () => {
    playerXName = document.getElementById("playerX").value;
  
    if (playerXName.trim() === "") {
      alert("Please enter the name for Player X before starting the game.");
      return;
    }
  
    currentPlayer = prompt("Which player will have the 'X'? Enter 'X' or 'O'.").toUpperCase();
    if (currentPlayer !== "X" && currentPlayer !== "O") {
      alert("Please enter a valid choice ('X' or 'O') for the player with 'X'.");
      return;
    }
  
    humanVsComputer = true;
    gameActive = true;
  
    if (currentPlayer === "O") {
      // If the computer plays first, make its move immediately
      makeComputerMove();
    }
  };
  
  
  
  const ponerMarca = (cellIndex) => {
    if (!gameActive || gameState[cellIndex] !== "") return;
  
    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
  
    if (checkWin()) {
      gameActive = false;
      if (humanVsComputer && currentPlayer === "O") {
        alert("Computer Wins!");
      } else {
        const currentPlayerName = currentPlayer === "X" ? playerXName : playerOName;
        alert("Player " + currentPlayerName + " (" + currentPlayer + ") Wins!");
      }
      return;
    }
  
    if (checkTie()) {
      gameActive = false;
      alert("Draw! It's a tie!");
      return;
    }
  
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  
    if (humanVsComputer && currentPlayer === "O" && gameActive) {
      // If playing against the computer and it's the computer's turn
      setTimeout(makeComputerMove, 500);
    }
  };
  
  const makeComputerMove = () => {
    // Generate a random index for the computer's move
    let emptyCellIndices = [];
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] === "") {
        emptyCellIndices.push(i);
      }
    }
  
    // Check if there are any empty cells
    if (emptyCellIndices.length > 0) {
      // Select a random empty cell index
      const randomIndex = Math.floor(Math.random() * emptyCellIndices.length);
      const computerMoveIndex = emptyCellIndices[randomIndex];
  
      // Place the computer's mark
      gameState[computerMoveIndex] = currentPlayer;
      document.getElementsByClassName("cell")[computerMoveIndex].innerText = currentPlayer;
  
      if (checkWin()) {
        gameActive = false;
        if (humanVsComputer && currentPlayer === "O") {
          alert("Computer Wins!");
        } else {
          const currentPlayerName = currentPlayer === "X" ? playerXName : playerOName;
          alert("Player " + currentPlayerName + " (" + currentPlayer + ") Wins!");
        }
        return;
      }
  
      if (checkTie()) {
        gameActive = false;
        alert("Draw! It's a tie!");
        return;
      }
  
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
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

// ...

  
const checkTie = () => {
  return !gameState.includes("");
};
const resetBoard = () => {
    playerXName = "";
    playerOName = "";
  
    currentPlayer = "";
    gameActive = false;
    gameState = ["", "", "", "", "", "", "", "", ""];
  
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }
  };
  
  
  

