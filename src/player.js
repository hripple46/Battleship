import { receiveAttack } from "./gameboard.js";

function Player(name) {
  function attack(gameBoard, xCoordinate, yCoordinate) {
    return gameBoard.receiveAttack(xCoordinate, yCoordinate);
  }
  return { name, attack };
}
function Computer() {
  function attack(gameBoard, xCoordinate, yCoordinate) {
    return gameBoard.receiveAttack(xCoordinate, yCoordinate);
  }
  return { attack };
}

export { Player, Computer };
