export function map(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output;
}

// Function takes an array and a callback, and runs the callback on each element of the array
// forEach does not return anything.
export function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

export function mapForEach(array, callback) {
  // Old -> array.slice()
  let output = [...array];

  forEach(output, callback);
}

/**
 * The function reduce takes an array and reduces the elements to a single value.
 * For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
 */
export function reduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(array[i], initialValue);
  }

  return initialValue;
}
