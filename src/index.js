import { Ship, hit, isSunk } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player, Computer } from "./player.js";
import { gameStart } from "./createGame";
let Henry = Player("Henry");
let Comp = Computer();

gameStart();

let playersGridPoints = document.querySelectorAll(".playerGridSpot");
for (let i = 0; i < playersGridPoints.length; i++) {
  playersGridPoints[i].addEventListener("click", () => {
    console.log(`Computer selects Player at ${i}`);
  });
}
let computersGridPoints = document.querySelectorAll(".computerGridSpot");
for (let i = 0; i < computersGridPoints.length; i++) {
  computersGridPoints[i].addEventListener("click", () => {
    console.log(`Player selects Computer at ${i}`);
  });
}
