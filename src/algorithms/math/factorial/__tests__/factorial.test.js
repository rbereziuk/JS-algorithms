import factorial from "../factorial";

describe("Factorial", () => {
  test("return factorial of number", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(13)).toBe(6227020800);
  });
});
