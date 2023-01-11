import { Player, Computer } from "./src/player";
import { Ship, hit, isSunk } from "./src/ship";
import { Gameboard } from "./src/gameboard";
let Henry = Player("Henry");
let garyBoard = Gameboard();
let Gary = Ship(2, 0, false);
garyBoard.placeShip(Gary, 1, 2, "horizontal");

let comp = Computer();

test("Player attacks garyBoard", () => {
  expect(Henry.attack(garyBoard, 1, 3)).toEqual({
    length: 2,
    hit: 1,
    sunkStatus: false,
  });
});

test("Computer attacks", () => {
  expect(comp.attack(garyBoard, 2, 3)).toEqual({ status: "miss!" });
});
