import { receiveAttack } from "./gameboard";

function Player(name) {
  function attack(gameBoard, xCoordinate, yCoordinate) {
    return gameBoard.receiveAttack(xCoordinate, yCoordinate);
  }
  return { name, attack };
}

export { Player };
