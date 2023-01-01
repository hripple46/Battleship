import { Ship, Gary, hitShip } from "./ship";

test("created ship object", () => {
  expect(Gary).toStrictEqual({
    length: 6,
    hit: 2,
    sunkStatus: false,
  });
});

test("You hit my battlsehip!", () => {
  expect(hitShip(Gary)).toStrictEqual({
    length: 6,
    hit: 3,
    sunkStatus: false,
  });
});
