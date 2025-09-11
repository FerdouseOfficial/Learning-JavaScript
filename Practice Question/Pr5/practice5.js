// Chapter 05: Functions
// block of code that perfroms a specific task, can be invoked(call) whenever needed

// To create Functions we have to follow two step . 1. Funciton Definition & 2. Funciton Call

// function myFunction(msg,n) {
// parameter -> input variable
// console.log("I am a Unbeatable Super Level Programmer");
// console.log("Welcome to Apna College! ");
// //   console.log(msg + n);
// }
// myFunction("I love javascript", 100); // arguement
// myFunction()

// Function -> 2 numbers, sum
// Funciton parameters are Local Variables :- They are Block Scopes

// function sum(a, b) {
// console.log(a+b);
// Also we can use return keyword
//   s = a + b;
//   return s;
//   after return no code run . return is the last line of a funcitons.
// }
// let add = sum(23, 2);
// console.log(add);

// ````````````````````````````` Arrow Functions ``````````````````````````````` ///

// compact way of writing functions

// => :- sign of arrow funcitons

// Additon Function
// function sum(a, b) {
//   console.log(a + b);
// }

// Here is how we can write the arrow function we haveto write it inside a variable
// Addition Arrow Function
// let arrowVar = (a, b) => {
//   console.log(a + b);
// };
// arrowVar(2, 4);
// That's how it works

// Multiplication Function
// function mult(a, b) {
//   console.log(a * b);
// }

// Multiplication Arrow Function

// let mul= (a,b) => {
// console.log(a*b);
// }
// mul(2,5)

// print hello arrow function

// let hel = () => {
// console.log("hello");
// }
// hel()

//`````````````````````` forEach Loop in Arrays ```````````````````````````````````````//

// Array.forEach(callbackfunction)
// callbackfunction: here , it is a function to execute for each element i the array
// A callback is a function passed as an arguement to another function.
// forEach only use for array not for other object and strings
// let arr = [1, 2, 3, 4, 5];

// applying forEach with Function
// arr.forEach(function printValue(val) {
//   console.log(val);
// });

// applying forEach with Array funciton

// arr.forEach((val) => {
//   console.log(val);
// });

// we can use 3 parameters on forEach loop : 1. the value/items, the index, the array itself

// ``````````````````````````` Some More Array Methods  ````````````````````````````````//

// we have learn this to make our life more easier in coding

//``````````````````````   Map Method ``````````````````````````````````

// create a new array with the results of some operation. The value its callback resturn are used to form new array.

// the diff between forEach and Map is Map create new array which forEach don't

let nums = [23, 25, 12, 21];

let newNum = nums.map((val) => {
  return (val ** 2);
});
console.log(newNum);
console.log(nums);

// ``````````````````` 
