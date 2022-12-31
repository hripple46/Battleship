function Ship(length, hit, sunkStatus) {
  return { length, hit, sunkStatus };
}

let Gary = Ship(6, 2, "no");

export { Ship, Gary };
