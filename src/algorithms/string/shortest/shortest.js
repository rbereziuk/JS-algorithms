/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 */

export function findShort(s) {
  var sArr = s.toLowerCase().split(' ');
  var smallest = s.length;

  sArr.forEach(word => {
    if (word.length < smallest) {
      smallest = word.length;
    }
  });

  return smallest;
}

export function findShort2(s) {
  return Math.min.apply(
    null,
    s.split(' ').map(w => w.length)
  );
}

export function findShort3(s) {
  return Math.min(...s.split(' ').map(s => s.length));
}

export const findShort4 = s =>
  s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length;

export function findShort5(s) {
  return s
    .split(' ')
    .reduce((min, word) => Math.min(min, word.length), Infinity);
}
