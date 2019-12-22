import { charCount } from "../charCount";

test("Count char in string", () => {
  expect(charCount("super cool")).toStrictEqual({
    s: 1,
    u: 1,
    p: 1,
    e: 1,
    r: 1,
    c: 1,
    o: 2,
    l: 1
  });
});
