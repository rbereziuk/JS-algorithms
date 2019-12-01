import { map } from "../callbacks";

describe("callbacks", () => {
  test("map", () => {
    expect(map([1, 2, 3], a => a + 2)).toStrictEqual([3, 4, 5]);
  });
});
