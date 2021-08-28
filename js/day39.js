let turn = "X";

function displayTurn() {
  const turnDisplay = document.querySelector("#turn-display");
  turnDisplay.innerHTML = `${turn}'s Turn`;
}

function changeTurns() {
  if (turn === "X") turn = "O";
  else turn = "X";
  displayTurn();
}

// checks the state of the game, returns 'X', 'O', 'Tie', or ''
function result() {
  let cellsFilled = 0;

  // check rows
  for (let i = 1; i <= 3; i++) {
    let cell1 = document.querySelector(`#cell${i}1`).innerHTML;
    if (cell1 !== "") cellsFilled++;
    let cell2 = document.querySelector(`#cell${i}2`).innerHTML;
    if (cell2 !== "") cellsFilled++;
    let cell3 = document.querySelector(`#cell${i}3`).innerHTML;
    if (cell3 !== "") cellsFilled++;

    if (cell1 === cell2 && cell2 === cell3) {
      if (cell1 === "") continue;
      return cell1;
    }
  }
  // check columns
  for (let j = 1; j <= 3; j++) {
    let cell1 = document.querySelector(`#cell1${j}`).innerHTML;
    if (cell1 !== "") cellsFilled++;
    let cell2 = document.querySelector(`#cell2${j}`).innerHTML;
    if (cell2 !== "") cellsFilled++;
    let cell3 = document.querySelector(`#cell3${j}`).innerHTML;
    if (cell3 !== "") cellsFilled++;

    if (cell1 === cell2 && cell2 === cell3) {
      if (cell1 === "") continue;
      return cell1;
    }
  }
  // check diagonals

  let cell1 = document.querySelector(`#cell11`).innerHTML;
  if (cell1 !== "") cellsFilled++;
  let cell2 = document.querySelector(`#cell22`).innerHTML;
  if (cell2 !== "") cellsFilled++;
  let cell3 = document.querySelector(`#cell33`).innerHTML;
  if (cell3 !== "") cellsFilled++;

  if (cell1 === cell2 && cell2 === cell3) {
    if (cell1 !== "") return cell1;
  }

  cell1 = document.querySelector(`#cell13`).innerHTML;
  if (cell1 !== "") cellsFilled++;
  cell2 = document.querySelector(`#cell22`).innerHTML;
  if (cell2 !== "") cellsFilled++;
  cell3 = document.querySelector(`#cell31`).innerHTML;
  if (cell3 !== "") cellsFilled++;

  if (cell1 === cell2 && cell2 === cell3) {
    if (cell1 !== "") return cell1;
  }

  if (cellsFilled === 24) return "Tie";

  return "";
}

function displayMessage(message) {
  const messageElement = document.querySelector("#message");
  messageElement.innerHTML = message;
}

function freezeBoard() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      let cellId = `#cell${i}${j}`;
      document.querySelector(cellId).onclick = () => {};
    }
  }
}

function makeMove(cellId) {
  const cell = document.querySelector(cellId);

  // prevent changes in filled cells
  if (cell.innerHTML !== "") return;
  cell.innerHTML = turn;

  changeTurns();

  const gameState = result();
  switch (gameState) {
    case "Tie":
      displayMessage("Tied!");
      freezeBoard();
      document.querySelector("#play-again").style.display = "inline";
      break;
    case "":
      break;
    default:
      displayMessage(`${gameState} Wins!`);
      freezeBoard();
      document.querySelector("#play-again").style.display = "inline";
      break;
  }
}

function resetBoard() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      let cellId = `#cell${i}${j}`;
      document.querySelector(cellId).innerHTML = "";
      document.querySelector(cellId).onclick = () => makeMove(cellId);
    }
  }

  document.querySelector("#play-again").style.display = "none";
  displayMessage("");
}

document.querySelector("#play-again").addEventListener("click", resetBoard);

displayTurn();
resetBoard();
