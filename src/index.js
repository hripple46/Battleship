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

//the following placeShip functions are temporary placeholders to further test game cycle
henrysBoard.placeShip(carrier1Comp, 7, "vertical");
henrysBoard.placeShip(battleship1Comp, 3, "horizontal");
henrysBoard.placeShip(battleship2Comp, 8, "horizontal");
henrysBoard.placeShip(cruiser1Comp, 12, "horizontal");
henrysBoard.placeShip(cruiser2Comp, 15, "horizontal");
henrysBoard.placeShip(cruiser3Comp, 16, "horizontal");
henrysBoard.placeShip(sub1Comp, 75, "vertical");
henrysBoard.placeShip(sub2Comp, 76, "vertical");
henrysBoard.placeShip(sub4Comp, 78, "vertical");

henrysBoard.placeShip(destroyer1Comp, 80, "horizontal");

henrysBoard.placeShip(destroyer2Comp, 97, "horizontal");
henrysBoard.placeShip(destroyer3Comp, 82, "horizontal");
henrysBoard.placeShip(destroyer4Comp, 87, "horizontal");
henrysBoard.placeShip(destroyer5Comp, 90, "horizontal");

compBoard.placeShip(carrier1Comp, 7, "vertical");
compBoard.placeShip(battleship1Comp, 3, "horizontal");
compBoard.placeShip(battleship2Comp, 8, "horizontal");
compBoard.placeShip(cruiser1Comp, 12, "horizontal");
compBoard.placeShip(cruiser2Comp, 15, "horizontal");
compBoard.placeShip(cruiser3Comp, 16, "horizontal");
compBoard.placeShip(sub1Comp, 75, "vertical");
compBoard.placeShip(sub2Comp, 76, "vertical");
compBoard.placeShip(sub4Comp, 78, "vertical");

compBoard.placeShip(destroyer1Comp, 80, "horizontal");

compBoard.placeShip(destroyer2Comp, 97, "horizontal");
compBoard.placeShip(destroyer3Comp, 82, "horizontal");
compBoard.placeShip(destroyer4Comp, 87, "horizontal");
compBoard.placeShip(destroyer5Comp, 90, "horizontal");
console.log(compBoard.grid);

let gridPoint = document.createElement("div");
gridPoint.setAttribute("div", "gridSpot");
let playerBoard = document.querySelector(".Board1");
let computersBoard = document.querySelector(".Board2");
for (let x = 0; x < 100; x++) {
  let gridPoint = document.createElement("div");
  let gridPointComp = document.createElement("div");
  gridPoint.setAttribute("class", "playerGridSpot");
  gridPoint.setAttribute("id", `player${x}`);
  gridPointComp.setAttribute("class", "computerGridSpot");
  gridPointComp.setAttribute("id", `computer${x}`);
  playerBoard.appendChild(gridPoint);
  computersBoard.appendChild(gridPointComp);
}
let playersGridPoints = document.querySelectorAll(".playerGridSpot");
for (let i = 0; i < playersGridPoints.length; i++) {
  playersGridPoints[i].addEventListener("click", () => {
    console.log(`Computer selects Player at ${i}`);
    let yString = i.toString().charAt(0);
    let y = parseInt(yString);
    let xString = i.toString().charAt(1);
    let xInt = parseInt(xString);
    let x = String.fromCharCode(97 + xInt);
    Comp.attack(henrysBoard, x, y);
    if (henrysBoard.grid[i] == null) {
      document.querySelector(`#player${i}`).innerText = "MISS";
    } else if (
      henrysBoard.grid[i] != null ||
      henrysBoard.grid[i].sunkStatus == false
    ) {
      document.querySelector(`#player${i}`).innerText = "X";
      document.querySelector(`#player${i}`).style.backgroundColor = "red";
    } else {
      document.querySelector(`#player${i}`).innerText = "MISS";
    }
  });
}
let computersGridPoints = document.querySelectorAll(".computerGridSpot");
for (let i = 0; i < computersGridPoints.length; i++) {
  computersGridPoints[i].addEventListener("click", () => {
    console.log(`Player selects Computer at ${i}`);
    let yString = i.toString().charAt(0);
    let y = parseInt(yString);
    let xString = i.toString().charAt(1);
    let xInt = parseInt(xString);
    let x = String.fromCharCode(97 + xInt);
    Henry.attack(compBoard, x, y);
    if (compBoard.grid[i] == null) {
      document.querySelector(`#computer${i}`).innerText = "MISS";
    } else if (
      compBoard.grid[i] != null ||
      compBoard.grid[i].sunkStatus == false
    ) {
      document.querySelector(`#computer${i}`).innerText = "X";
      document.querySelector(`#computer${i}`).style.backgroundColor = "red";
    } else {
      document.querySelector(`#computer${i}`).innerText = "MISS";
    }
  });
}
