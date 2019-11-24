import { fizzBuzz } from "../fizzBuzz";

test("FizzBuzz", () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(225)).toBe("FizzBuzz");
});
