/**
 * The harmless ransom note-basically you are given two strings.
 * You have to find whether you can make up the first string with words present in the second string
 */

export default function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};
  let noteIsPossible = true;

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

// Linear time complexity O(n) + O(m) -> O(n + m)
