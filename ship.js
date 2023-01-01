function Ship(length, hit, sunkStatus) {
  return { length, hit, sunkStatus };
}

function hit(shipObject) {
  let numberOfHits = shipObject.hit;
  numberOfHits = numberOfHits + 1;
  shipObject.hit = numberOfHits;
  return shipObject;
}

function isSunk(ship) {
  if (ship.length == ship.hit) {
    ship.sunkStatus = true;
  }
  return ship;
}

let Gary = Ship(3, 2, false);

export { Ship, hit, Gary, isSunk };
