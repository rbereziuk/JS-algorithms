export function sameInSquare(arr1, arr2) {
  // copy arr2 for mutate
  let arr2Copy = arr2.slice();
  // loop thow arr1
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2Copy.indexOf(arr1[i] * arr1[i]);
    // if element in square doesn't present in arr2 return false
    if (index == -1) return false;
    // if element present cut this element from array
    arr2Copy = [].concat(arr2Copy.slice(0, index), arr2Copy.slice(index + 1));
  }
  // if loop end return true
  return true;
}

// [1, 2, 3] and [4, 1, 2, 8, 9]

export function removeElement(array, element) {
  var index = array.indexOf(element);

  return [].concat(array.slice(0, index), array.slice(index + 1));
}

// Time Complexity - O(n^2)
export function same1(arr1, arr2) {
  if (arr2.length < arr1.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    var element = arr1[i] * arr1[i];
    var index = arr2.indexOf(element);
    if (index === -1) {
      return false;
    } else {
      arr2.splice(index, 1);
    }
  }

  return true;
}

export function same(arr1, arr2) {
  if (arr2.length < arr1.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
