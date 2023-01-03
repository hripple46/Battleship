import { Ship } from "./ship.js";

function Gameboard() {
  let grid = [];
  grid.length = 99;
  for (let j = 0; j < grid.length; j++) {
    grid[j] = null;
  }

  function placeShip(ship, startingPoint, startingDirection) {
    for (let i = startingPoint; i < grid.length; i++) {
      if (startingDirection == "horizontal") {
        if (ship.length == 2) {
          if (grid[i] == null && grid[i + 1] == null) {
            grid[i] = ship;
            grid[i + 1] = ship;
            return grid.slice(i, i + 2);
          } else if (grid[i] == null && grid[i - 1] == null) {
            grid[i] = ship;
            grid[i - 1] = ship;
            return grid.slice(i, i - 2);
          }
        } else if (ship.length == 3) {
          if (grid[i] == null && grid[i + 1] == null && grid[i + 2] == null) {
            grid[i] = ship;
            grid[i + 1] = ship;
            grid[i + 2] = ship;
            return grid.slice(i, i + 3);
          } else if (
            grid[i] == null &&
            grid[i - 1] == null &&
            grid[i - 2] == null
          ) {
            grid[i] = ship;
            grid[i - 1] = ship;
            grid[i - 2] = ship;
            return grid.slice(i, i - 3);
          }
        } else if (ship.length == 4) {
          if (grid[i] == null && grid[i + 1] == null) {
            grid[i] = ship;
            grid[i + 1] = ship;
            grid[i + 2] = ship;
            grid[i + 3] = ship;
            return grid.slice(i, i + 4);
          } else if (
            grid[i] == null &&
            grid[i - 1] == null &&
            grid[i - 2] == null &&
            grid[i - 3] == null
          ) {
            grid[i] = ship;
            grid[i - 1] = ship;
            grid[i - 2] = ship;
            grrid[i - 3] = ship;
            return grid.slice(i, i - 4);
          }
        } else if (ship.length == 5) {
          if (grid[i] == null && grid[i + 1] == null) {
            grid[i] = ship;
            grid[i + 1] = ship;
            grid[i + 2] = ship;
            grid[i + 3] = ship;
            grid[i + 4] = ship;
            return grid.slice(i, i + 5);
          } else if (
            grid[i] == null &&
            grid[i - 1] == null &&
            grid[i - 2] == null &&
            grid[i - 3] == null &&
            grid[i - 4] == null
          ) {
            grid[i] = ship;
            grid[i - 1] = ship;
            grid[i - 2] = ship;
            grrid[i - 3] = ship;
            grid[i - 4] = ship;
            return grid.slice(i, i - 5);
          }
        }
      } else if (startingDirection == "vertical") {
        if (ship.length == 2) {
          if (grid[i] == null && grid[i + 10] == null) {
            grid[i] = ship;
            grid[i + 10] = ship;
            return [grid[i], grid[i + 10]];
          } else if (grid[i] == null && grid[i - 10] == null) {
            grid[i] = ship;
            grid[i - 10] = ship;
            return [grid[i], grid[i - 10]];
          }
        } else if (ship.length == 3) {
          if (grid[i] == null && grid[i + 10] == null && grid[i + 20] == null) {
            grid[i] = ship;
            grid[i + 10] = ship;
            grid[i + 20] = ship;
            return [grid[i], grid[i + 10], grid[i + 20]];
          } else if (
            grid[i] == null &&
            grid[i - 10] == null &&
            grid[i - 20] == null
          ) {
            grid[i] = ship;
            grid[i - 10] = ship;
            grid[i - 20] = ship;
            return [grid[i], grid[i - 10], grid[i - 20]];
          }
        } else if (ship.length == 4) {
          if (
            grid[i] == null &&
            grid[i + 10] == null &&
            grid[i + 20] == null &&
            grid[i + 30] == null
          ) {
            grid[i] = ship;
            grid[i + 10] = ship;
            grid[i + 20] = ship;
            grid[i + 30] = ship;
            return [grid[i], grid[i + 10], grid[i + 20], grid[i + 30]];
          } else if (
            grid[i] == null &&
            grid[i - 10] == null &&
            grid[i - 20] == null &&
            grid[i - 30] == null
          ) {
            grid[i] = ship;
            grid[i - 10] = ship;
            grid[i - 20] = ship;
            grid[i - 30] = ship;
            return [grid[i], grid[i - 10], grid[i - 20], grid[i - 30]];
          }
        } else if (ship.length == 5) {
          if (
            grid[i] == null &&
            grid[i + 10] == null &&
            grid[i + 20] == null &&
            grid[i + 30] == null &&
            grid[i + 40] == null
          ) {
            grid[i] = ship;
            grid[i + 10] = ship;
            grid[i + 20] = ship;
            grid[i + 30] = ship;
            grid[i + 40] = ship;
            return [
              grid[i],
              grid[i + 10],
              grid[i + 20],
              grid[i + 30],
              grid[i + 40],
            ];
          } else if (
            grid[i] == null &&
            grid[i - 10] == null &&
            grid[i - 20] == null &&
            grid[i - 30] == null &&
            grid[i - 40] == null
          ) {
            grid[i] = ship;
            grid[i - 10] = ship;
            grid[i - 20] = ship;
            grid[i - 30] = ship;
            grid[i - 40] = ship;
            return [
              grid[i],
              grid[i - 10],
              grid[i - 20],
              grid[i - 30],
              grid[i - 40],
            ];
          }
        }
      }
    }
  }
  return { grid, placeShip };
}
let gary = Ship(3, 0, false);
let garyBoard = Gameboard();
garyBoard.placeShip(gary, 12, "horizontal");

export { Gameboard };