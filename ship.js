function Ship(length, hit, sunkStatus) {
  return { length, hit, sunkStatus };
}

function hitShip(shipObject) {
  let numberOfHits = shipObject.hit;
  numberOfHits = numberOfHits + 1;
  shipObject.hit = numberOfHits;
  return shipObject;
}

let Gary = Ship(6, 2, false);

export { Ship, hitShip, Gary };
