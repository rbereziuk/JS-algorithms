// Reverse every word in the string
// Return the new string

function reverseWords(str) {
  // Make array of words
  var strArr = str.split(' ');
  // create empty array 
  var outputArr = [];

  // Loop through array
  strArr.forEach(word => {
    var reverseWord = '';

    for(let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }

    outputArr.push(reverseWord);

  });

  return outputArr.join(' ');
}

