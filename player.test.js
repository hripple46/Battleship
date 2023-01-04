import { Player, Computer } from "./player";
import { Ship, hit, isSunk } from "./ship";
import { Gameboard } from "./gameboard";
let Henry = Player("Henry");
let garyBoard = Gameboard();
let Gary = Ship(2, 0, false);
garyBoard.placeShip(Gary, 1, "horizontal");

let comp = Computer();

test("Player attacks garyBoard", () => {
  expect(Henry.attack(garyBoard, "b", 0)).toEqual({
    length: 2,
    hit: 1,
    sunkStatus: false,
  });
});

test("Computer attacks", () => {
  expect(comp.attack(garyBoard)).toEqual({ status: "miss!" });
});
