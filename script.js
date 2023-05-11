// Se setean las variablese globales de jugador activo, bandera de si el juego sigue activo y el estado actual del juego
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
//Se setean las condiciones de victoria 
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
//Cell index viene del html como un parametro
const ponerMarca = (cellIndex) => {
    //se comprueba que el juego aun no haya terminado o  que no haya ya un valor dentro de la celda
  if (!gameActive || gameState[cellIndex] !== "") return;

  //Se coloca al nombre del jugador actual en la posicion del array correspondiente a la celda clickeada
  gameState[cellIndex] = currentPlayer;
  //Se coloca el nombre del jugador en la celda clickeada
  document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;

  //Llama a la funcion para comprobar alguien gano el juego, de ser asi se imprime un mensaje y coloca el estado del juego en inactivo
  if (checkWin()) {
    
    gameActive = false;
    alert("Jugador " + currentPlayer + " Gana!");
    return;
  }
//Llama a la funcion para comprobar un empate, de ser asi se imprime un mensaje y coloca el estado del juego en inactivo
  if (checkTie()) {
    gameActive = false;
    alert("Empate!");

    return;
  }

  //Condicional que cambia al jugador cada vez que se coloca una marca , si es x pasa a o si no pasa a x
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};
//Funcion a la que se llama cada vez que se coloca una marca para comprobar si un jugador gano
const checkWin = () => {
    //Se itera  sobre el array de condiciones de victoria , se le asigna los valores en esa posicion a un array auxiliar para 
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    //Si la posicion no esta vacia y esta tiene un contenido igual a las otras 2 posiciones de victoria se devulve verdadero, si no falso.
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
//Si el estado del juego no incluye ninguna cadena vacia se concluye empate
const checkTie = () => {
  return !gameState.includes("");
};
//Se deja al tablero en su estado incial, reiniciando tambien las marcas colocadas
const resetBoard = () => {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];

  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
};

