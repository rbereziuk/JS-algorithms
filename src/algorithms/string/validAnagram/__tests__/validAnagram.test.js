import validAnagram from '../validAnagram.js';

test('anagram', () => {
  expect(validAnagram('aaz', 'zza')).toBeFalsy();
  expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
  expect(validAnagram('rat', 'car')).toBeFalsy();
  expect(validAnagram('awesome', 'awesome')).toBeFalsy();
  expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
});
