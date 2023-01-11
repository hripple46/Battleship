import { Gameboard } from "./src/gameboard.js";
import { Ship, hit, isSunk } from "./src/ship.js";

let garyBoard = Gameboard();
let gary = Ship(2, 0, false);
garyBoard.placeShip(gary, 1, 3, "horizontal");

test("gary (of length 2) has been placed vertically", () => {
  expect(garyBoard.placeShip(gary, 2, 3, "horizontal")).toEqual(
    { hit: 0, length: 2, sunkStatus: false },
    { hit: 0, length: 2, sunkStatus: false }
  );
});

test("gary has been hit", () => {
  expect(garyBoard.receiveAttack(1, 4)).toEqual({
    length: 2,
    hit: 1,
    sunkStatus: false,
  });
});

test("all ships have sunk", () => {
  expect(garyBoard.checkIfAllShipsSunk()).toBe(false);
});
