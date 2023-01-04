import { Ship, hit, isSunk } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player, Computer } from "./player.js";
let Henry = Player("Henry");
let Comp = Computer();

let henrysBoard = Gameboard();
let compBoard = Gameboard();

let carrier1 = Ship(5, 0, false);
let battleship1 = Ship(4, 0, false);
let battleship2 = Ship(4, 0, false);
let cruiser1 = Ship(3, 0, false);
let cruiser2 = Ship(3, 0, false);
let cruiser3 = Ship(3, 0, false);
let sub1 = Ship(3, 0, false);
let sub2 = Ship(3, 0, false);
let sub3 = Ship(3, 0, false);
let sub4 = Ship(3, 0, false);
let destroyer1 = Ship(2, 0, false);
let destroyer2 = Ship(2, 0, false);
let destroyer3 = Ship(2, 0, false);
let destroyer4 = Ship(2, 0, false);
let destroyer5 = Ship(2, 0, false);

let playersShips = [
  carrier1,
  battleship1,
  battleship2,
  cruiser1,
  cruiser2,
  cruiser3,
  sub1,
  sub2,
  sub3,
  sub4,
  destroyer1,
  destroyer2,
  destroyer3,
  destroyer4,
  destroyer5,
];

let carrier1Comp = Ship(5, 0, false);
let battleship1Comp = Ship(4, 0, false);
let battleship2Comp = Ship(4, 0, false);
let cruiser1Comp = Ship(3, 0, false);
let cruiser2Comp = Ship(3, 0, false);
let cruiser3Comp = Ship(3, 0, false);
let sub1Comp = Ship(3, 0, false);
let sub2Comp = Ship(3, 0, false);
let sub3Comp = Ship(3, 0, false);
let sub4Comp = Ship(3, 0, false);
let destroyer1Comp = Ship(2, 0, false);
let destroyer2Comp = Ship(2, 0, false);
let destroyer3Comp = Ship(2, 0, false);
let destroyer4Comp = Ship(2, 0, false);
let destroyer5Comp = Ship(2, 0, false);

let computersShips = [
  carrier1Comp,
  battleship1Comp,
  battleship2Comp,
  cruiser1Comp,
  cruiser2Comp,
  cruiser3Comp,
  sub1Comp,
  sub2Comp,
  sub3Comp,
  sub4Comp,
  destroyer1Comp,
  destroyer2Comp,
  destroyer3Comp,
  destroyer4Comp,
  destroyer5Comp,
];

//add ships to gameboards

for (let i = 0; i < playersShips.length; i++) {
  henrysBoard.placeShip(playersShips[i], i, "horizontal");
}
for (let j = 0; j < computersShips.length; j++) {
  compBoard.placeShip(computersShips[j], j, "horizontal");
}
let gridPoint = document.createElement("div");
gridPoint.setAttribute("div", "gridSpot");
let playerBoard = document.querySelector(".Board1");
let computersBoard = document.querySelector(".Board2");
for (let x = 0; x < 100; x++) {
  let gridPoint = document.createElement("div");
  let gridPointComp = document.createElement("div");
  gridPoint.setAttribute("class", "gridSpot");
  gridPointComp.setAttribute("class", "gridSpot");
  playerBoard.appendChild(gridPoint);
  computersBoard.appendChild(gridPointComp);
}
console.log(compBoard.grid.length);
