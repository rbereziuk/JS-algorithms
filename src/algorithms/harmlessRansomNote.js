function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
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
