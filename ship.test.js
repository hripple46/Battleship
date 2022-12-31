import { Ship, Gary } from "./ship";

test("created ship object", () => {
  expect(Gary).toStrictEqual({
    length: 6,
    hit: 2,
    sunkStatus: "no",
  });
});
