import { parse } from "@babel/core";
import { receiveAttack } from "./gameboard";

function Player(name) {
  function attack(gameBoard, xCoordinate, yCoordinate) {
    return gameBoard.receiveAttack(xCoordinate, yCoordinate);
  }
  return { name, attack };
}
function Computer() {
  function attack(gameBoard) {
    let gridPoint = Math.floor(Math.random() * gameBoard.grid.length);
    if (
      gameBoard.grid[gridPoint] == null ||
      gameBoard.grid[gridPoint].isSunk == false
    ) {
      let yString = gridPoint.toString().charAt(0);
      let y = parseInt(yString);
      let xString = gridPoint.toString().charAt(1);
      let xInt = parseInt(xString);
      let x = String.fromCharCode(97 + xInt);
      return gameBoard.receiveAttack(x, y);
    } else {
      return Computer.attack(gameBoard);
    }
  }
  return { attack };
}

export { Player, Computer };
