import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";
let gary = Ship(5, 0, false);

let garyBoard = Gameboard();

test("gary (of length 4) has been placed vertically", () => {
  expect(garyBoard.placeShip(gary, 5, "vertical")).toEqual([
    gary,
    gary,
    gary,
    gary,
    gary,
  ]);
});
