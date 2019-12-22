export default function validAnagram(word1, word2) {
  if (word1 === word2 || word1.length !== word2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of word1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of word2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}
