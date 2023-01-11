import { Ship, hit, isSunk } from "./ship.js";

function Gameboard() {
  let grid = [];
  grid.length = 10;
  for (let j = 0; j < grid.length; j++) {
    grid[j] = [null, null, null, null, null, null, null, null, null, null];
  }

  function placeShip(ship, startingPoint1, startingPoint2, startingDirection) {
    if (startingDirection == "horizontal") {
      if (ship.length == 2) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 + 1] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 + 1] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 - 1] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 - 1] = ship;
        }
      } else if (ship.length == 3) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 + 1] == null &&
          grid[startingPoint1][startingPoint2 + 2]
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 + 1] = ship;
          grid[startingPoint1][startingPoint2 + 2] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 - 1] == null &&
          grid[startingPoint1][startingPoint2 - 2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 - 1] = ship;
          grid[startingPoint1][startingPoint2 - 2] = ship;
        }
      } else if (ship.length == 4) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 + 1] == null &&
          grid[startingPoint1][startingPoint2 + 2] == null &&
          grid[startingPoint1][startingPoint2 + 3] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 + 1] = ship;
          grid[startingPoint1][startingPoint2 + 2] = ship;
          grid[startingPoint1][startingPoint2 + 3] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 - 1] == null &&
          grid[startingPoint1][startingPoint2 - 2] == null &&
          grid[startingPoint1][startingPoint2 - 3] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 - 1] = ship;
          grid[startingPoint1][startingPoint2 - 2] = ship;
          grid[startingPoint1][startingPoint2 - 3] = ship;
        }
      } else if (ship.length == 5) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 + 1] == null &&
          grid[startingPoint1][startingPoint2 + 2] == null &&
          grid[startingPoint1][startingPoint2 + 3] == null &&
          grid[startingPoint1][startingPoint2 + 4] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 + 1] = ship;
          grid[startingPoint1][startingPoint2 + 2] = ship;
          grid[startingPoint1][startingPoint2 + 3] = ship;
          grid[startingPoint1][startingPoint2 + 4] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1][startingPoint2 - 1] == null &&
          grid[startingPoint1][startingPoint2 - 2] == null &&
          grid[startingPoint1][startingPoint2 - 3] == null &&
          grid[startingPoint1][startingPoint2 - 4] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1][startingPoint2 - 1] = ship;
          grid[startingPoint1][startingPoint2 - 2] = ship;
          grid[startingPoint1][startingPoint2 - 3] = ship;
          grid[startingPoint1][startingPoint2 - 4] = ship;
        }
      }
    } else if (startingDirection == "vertical") {
      if (ship.length == 2) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 + 1][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 + 1][startingPoint2] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 - 1][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 - 1][startingPoint2] = ship;
        }
      } else if (ship.length == 3) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 + 1][startingPoint2] == null &&
          grid[startingPoint1 + 2][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 + 1][startingPoint2] = ship;
          grid[startingPoint1 + 2][startingPoint2] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 - 1][startingPoint2] == null &&
          grid[startingPoint1 - 2][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 - 1][startingPoint2] = ship;
          grid[startingPoint1 - 2][startingPoint2] = ship;
        }
      } else if (ship.length == 4) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 + 1][startingPoint2] == null &&
          grid[startingPoint1 + 2][startingPoint2] == null &&
          grid[startingPoint1 + 3][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 + 1][startingPoint2] = ship;
          grid[startingPoint1 + 2][startingPoint2] = ship;
          grid[startingPoint1 + 3][startingPoint2] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 - 1][startingPoint2] == null &&
          grid[startingPoint1 - 2][startingPoint2] == null &&
          grid[startingPoint1 - 3][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 - 1][startingPoint2] = ship;
          grid[startingPoint1 - 2][startingPoint2] = ship;
          grid[startingPoint1 - 3][startingPoint2] = ship;
        }
      } else if (ship.length == 5) {
        if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 + 1][startingPoint2] == null &&
          grid[startingPoint1 + 2][startingPoint2] == null &&
          grid[startingPoint1 + 3][startingPoint2] == null &&
          grid[startingPoint1 + 4][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 + 1][startingPoint2] = ship;
          grid[startingPoint1 + 2][startingPoint2] = ship;
          grid[startingPoint1 + 3][startingPoint2] = ship;
          grid[startingPoint1 + 4][startingPoint2] = ship;
        } else if (
          grid[startingPoint1][startingPoint2] == null &&
          grid[startingPoint1 - 1][startingPoint2] == null &&
          grid[startingPoint1 - 2][startingPoint2] == null &&
          grid[startingPoint1 - 3][startingPoint2] == null &&
          grid[startingPoint1 - 4][startingPoint2] == null
        ) {
          grid[startingPoint1][startingPoint2] = ship;
          grid[startingPoint1 - 1][startingPoint2] = ship;
          grid[startingPoint1 - 2][startingPoint2] = ship;
          grid[startingPoint1 - 3][startingPoint2] = ship;
          grid[startingPoint1 - 4][startingPoint2] = ship;
        }
      }
    }
    return (
      grid[startingPoint1][startingPoint2],
      grid[startingPoint1][startingPoint2 + 1]
    );
  }
  function receiveAttack(x, y) {
    if (grid[x][y] != null && grid[x][y].sunkStatus == false) {
      hit(grid[x][y]);
      //checks if all ships have sunk
    } else if (grid[x][y] == null) {
      grid[x][y] = { status: "miss!" };
    }

    return grid[x][y];
  }
  function checkIfAllShipsSunk() {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] != null && grid[i][j] != { status: "miss" }) {
          if (grid[i][j].sunkStatus == true) {
            continue;
          } else if (grid[i][j].sunkStatus == false) {
            return false;
          }
        } else {
          continue;
        }
      }
    }
    return true;
  }

  return { grid, placeShip, receiveAttack, checkIfAllShipsSunk };
}

export { Gameboard };
