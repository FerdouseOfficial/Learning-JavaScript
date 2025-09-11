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

let VowelsCounter = (str) => {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
VowelsCounter("");
