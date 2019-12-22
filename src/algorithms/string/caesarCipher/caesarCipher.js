export function caesarCipher(string = '', n = 0) {
  // For "big" n
  // Result 0 <= n <= 26 or -26 <= n <= 0
  n = n % 26;
  // Transform string
  var message = string.toLowerCase();
  // Init basic alphabet
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  for (let i = 0; i < message.length; i++) {
    // Declare new variable for convenience
    var currentChar = message[i];
    // Try to find index letter in alphabet
    var originIndex = alphabet.indexOf(currentChar);
    // If character is not present -> skip
    if (originIndex == -1) {
      newString += currentChar;
      continue;
    }
    // make cipher
    var newIndex = originIndex + n;
    // Consider going beyond alphabet
    if (newIndex >= alphabet.length) {
      newIndex = newIndex - alphabet.length;
    }
    if (newIndex < 0) {
      newIndex = alphabet.length + newIndex;
    }
    // Rerurn uppercase and added cipher letter to new string
    if (string[i] == string[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
}
