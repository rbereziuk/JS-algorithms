import harmlessRansomNote from "../harmlessRansomNote";

var noteText = "this is note from a secret admirer";
var magazineText = "this is note from a secret admirer and something else";

describe("Harmless Ransom Note", () => {
  test("Is note possible", () => {
    expect(harmlessRansomNote(noteText, magazineText)).toBe(true);
  });
});
