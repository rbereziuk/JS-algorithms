import reverseWords from "../reverseWords";

describe("Reverse words", () => {
  test("return reverse string", () => {
    expect(reverseWords("super cool")).toBe("repus looc");
  });
});
