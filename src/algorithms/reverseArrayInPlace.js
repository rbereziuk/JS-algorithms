// Manibulate passed array only
// Do NOT push element into a new array and return that array
// Do NOT use array.reverse method
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length -1 - i] = temp;
  }

  return arr;
}

