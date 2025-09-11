// Chapter 05: Functions

//```````````````````````````` Question 01 `````````````````````````````````````````````//

// Create a function using the "function" keyword that takes a String as an arguement & returns the number of vowels in the string.

// `````````````````````````` Question 02 ````````````````````````````````````````````//

// Create an arrow function to perform the same task.

// function vowelsFinder(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowelsFinder("College");

// Using Arrow funciton

// let VowelsCounter = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// VowelsCounter("");

// ``````````````````````````````` Question 03 `````````````````````````````` //

// For a given Array of numbers, print the square  of each value using the forEach loop.

// let arr = [1,2,3,4,5,6,7];

// arr.forEach(function squareFunction(val, idx) {
//   square = val ** 2;
//   console.log(`${idx+1} square is ${square}`)
// });

// solving using Array Function
// arr.forEach((val, idx) => {
//   square = val ** 2;
//   result = `${idx+1} square is ${square}`;
//   console.log(result)
// });

//`````````````````````````````` let Practice Questions ``````````````````````````//

// Question. We are given array of marks of students. Filter out of the marks of the students that scroded 90+.

let marks = [70, 50, 98, 95, 93, 90, 89, 84, 82, 73];

let topRanker = marks.filter((val) => {
  return val>90;
});

console.log(topRanker);