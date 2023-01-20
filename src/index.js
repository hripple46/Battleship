({
  plugins: ["jsdom-quokka-plugin"],
});

import { Ship, hit, isSunk } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player, Computer } from "./player.js";

let player1Counter = 0;
let player2Counter = 0;

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

//the following placeShip functions are temporary placeholders to further test game cycle
henrysBoard.placeShip(carrier1, 0, 1, "vertical");
henrysBoard.placeShip(battleship1, 3, 1, "horizontal");
henrysBoard.placeShip(battleship2, 8, 1, "horizontal");
henrysBoard.placeShip(cruiser1, 4, 1, "horizontal");
henrysBoard.placeShip(cruiser2, 5, 3, "horizontal");
henrysBoard.placeShip(cruiser3, 6, 2, "horizontal");
henrysBoard.placeShip(sub1, 7, 1, "vertical");
henrysBoard.placeShip(sub2, 7, 6, "vertical");
henrysBoard.placeShip(sub4, 8, 1, "horizontal");
henrysBoard.placeShip(destroyer1, 8, 7, "horizontal");
henrysBoard.placeShip(destroyer2, 9, 7, "horizontal");
henrysBoard.placeShip(destroyer3, 9, 0, "horizontal");
henrysBoard.placeShip(destroyer4, 1, 2, "vertical");
henrysBoard.placeShip(destroyer5, 1, 7, "horizontal");

compBoard.placeShip(carrier1Comp, 0, 1, "vertical");
compBoard.placeShip(battleship1Comp, 3, 1, "horizontal");
compBoard.placeShip(battleship2Comp, 8, 1, "horizontal");
compBoard.placeShip(cruiser1Comp, 4, 1, "horizontal");
compBoard.placeShip(cruiser2Comp, 5, 3, "horizontal");
compBoard.placeShip(cruiser3Comp, 6, 2, "horizontal");
compBoard.placeShip(sub1Comp, 7, 1, "vertical");
compBoard.placeShip(sub2Comp, 7, 6, "vertical");
compBoard.placeShip(sub4Comp, 8, 1, "horizontal");
compBoard.placeShip(destroyer1Comp, 8, 7, "horizontal");
compBoard.placeShip(destroyer2Comp, 9, 7, "horizontal");
compBoard.placeShip(destroyer3Comp, 9, 0, "horizontal");
compBoard.placeShip(destroyer4Comp, 1, 2, "vertical");
compBoard.placeShip(destroyer5Comp, 1, 7, "horizontal");

console.log(henrysBoard.grid);
//the following block of code add unique IDs to dom elements
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
  //initializing Xint here to prevent any bugs if selected point is first row
  let x = 0;
  let y = 0;
  let xString = "";
  let yString = "";
  playersGridPoints[i].addEventListener("click", () => {
    console.log(player1Counter, player2Counter);
    if (
      compBoard.checkPlayerTurn(player1Counter, player2Counter) ==
      "Player 1s Turn"
    ) {
      player1Counter += 1;
      console.log(`Computer selects Player at ${i}`);
      //following formula prevents bugs if i is < 10
      if (i < 10) {
        x = 0;
        y = i;
      } else {
        xString = String(i).charAt(0);
        x = Number(xString);
        yString = String(i).charAt(1);
        y = Number(yString);
      }
      if (playersGridPoints[i].innerText != "") {
        return;
      } else {
        Comp.attack(henrysBoard, x, y);
        if (Object.values(henrysBoard.grid[x][y]).includes("miss!")) {
          document.querySelector(`#player${i}`).innerText = "MISS";
        } else if (
          henrysBoard.grid[x][y] != null ||
          henrysBoard.grid[x][y].sunkStatus == false
        ) {
          document.querySelector(`#player${i}`).innerText = "X";
          document.querySelector(`#player${i}`).style.backgroundColor = "red";
          console.log(henrysBoard.grid[x][y]);
          if (henrysBoard.checkIfAllShipsSunk()) {
            prompt("Computer beats Player");
          }
        } else {
          document.querySelector(`#player${i}`).innerText = "MISS";
        }
      }
    } else {
      prompt("Not Your Turn");
    }
  });
}
let computersGridPoints = document.querySelectorAll(".computerGridSpot");
for (let i = 0; i < computersGridPoints.length; i++) {
  computersGridPoints[i].addEventListener("click", () => {
    if (
      henrysBoard.checkPlayerTurn(player1Counter, player2Counter) ==
      "Player 2s Turn"
    ) {
      player2Counter += 1;
      let x = 0;
      let y = 0;
      let xString = "";
      let yString = "";
      console.log(`Computer selects Player at ${i}`);
      //following formula prevents bugs if i is < 10
      if (i < 10) {
        x = 0;
        y = i;
      } else {
        xString = String(i).charAt(0);
        x = Number(xString);
        yString = String(i).charAt(1);
        y = Number(yString);
      }
      if (computersGridPoints[i].innerText != "") {
        return;
      } else {
        Henry.attack(compBoard, x, y);
        if (Object.values(compBoard.grid[x][y]).includes("miss!")) {
          document.querySelector(`#computer${i}`).innerText = "MISS";
        } else if (
          compBoard.grid[x][y] != null ||
          compBoard.grid[x][y].sunkStatus == false
        ) {
          document.querySelector(`#computer${i}`).innerText = "X";
          document.querySelector(`#computer${i}`).style.backgroundColor = "red";
          console.log(compBoard.grid[x][y]);
          if (compBoard.checkIfAllShipsSunk()) {
            prompt("Player beats Computer!");
          }
        } else {
          document.querySelector(`#computer${i}`).innerText = "MISS";
        }
      }
    } else {
      prompt("Not Your Turn");
    }
  });
}
