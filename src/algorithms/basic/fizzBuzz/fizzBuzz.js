/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number
 * and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”
 */

export function fizzBuzz(n) {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return n;
  }
}

export function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }

    console.log(str || i);
  }
}

export function fizzBuzz3(n) {
  for (var i = 1; i <= n; i++) {
    var f = i % 3 == 0,
      b = i % 5 == 0;
    console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
  }
}

// The shortest solution to FizzBuzz
export function fizzBuzz4(n) {
  for (let i = 0; i < n; )
    console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
}
