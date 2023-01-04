function Ship(length, hit, sunkStatus) {
  return { length, hit, sunkStatus };
}

function hit(shipObject) {
  let numberOfHits = shipObject.hit;
  numberOfHits = numberOfHits + 1;
  shipObject.hit = numberOfHits;
  isSunk(shipObject);
  return shipObject;
}

function isSunk(ship) {
  if (ship.length == ship.hit) {
    ship.sunkStatus = true;
  }
  return ship;
}

export { Ship, hit, isSunk };
