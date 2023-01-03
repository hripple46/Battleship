import { Gameboard } from "./gameboard.js";
import { Ship, hit, isSunk } from "./ship.js";

let garyBoard = Gameboard();
let gary = Ship(2, 1, false);
garyBoard.placeShip(gary, 5, "horizontal");

test("gary (of length 4) has been placed vertically", () => {
  expect(garyBoard.placeShip(gary, 5, "horizontal")).toEqual([gary, gary]);
});

test("gary has been hit", () => {
  expect(garyBoard.receiveAttack("g", 0)).toEqual({
    length: 2,
    hit: 2,
    sunkStatus: true,
  });
});

test("all ships have sunk", () => {
  expect(garyBoard.checkIfAllShipsSunk()).toBe("game over");
});
