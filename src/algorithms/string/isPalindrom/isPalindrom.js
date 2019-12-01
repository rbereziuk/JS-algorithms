export function isPalindrom(str) {
  const strReverse = str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (str == strReverse) {
    return true;
  } else {
    return false;
  }
}

export function isPalindrom2(string) {
  string = string.toLowerCase();
  var charactersArr = string.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz";

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") == lettersArr.reverse().join("")) return true;
}
