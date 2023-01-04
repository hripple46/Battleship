import { Ship, hit, isSunk } from "./src/ship";

let Gary = Ship(3, 2, false);

test("created ship object", () => {
  expect(Gary).toStrictEqual({
    length: 3,
    hit: 2,
    sunkStatus: false,
  });
});

test("You hit my battlsehip!", () => {
  expect(hit(Gary)).toStrictEqual({
    length: 3,
    hit: 3,
    sunkStatus: true,
  });
});

test("You sunk my Battleship!", () => {
  expect(isSunk(Gary)).toStrictEqual({
    length: 3,
    hit: 3,
    sunkStatus: true,
  });
});
