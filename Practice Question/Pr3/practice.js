//  Chapter 03:- Loops & Strings

// We can write for loop in 3 steps:- Initialization, stopping condition, updation

// Print 1 to 5
// for(let count=1; count <= 5; count++) {
//     console.log("I am  a Great Programmer");
// }

// let sum = 0;
// // let n = prompt("Enter Your Number Please: ");
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum = ", sum);

// ```````         Infinte Loops in JavaScript    '''''''''' //

// infinte Loop: A loop that never Ends

// '''''''''''''' While Loop ''''''''''''''''''//

// 1. we will declare variable outside of the loo
// 2. Declare the stopping condition inside the parenthisis
// 3. write the increment property inside the curly brasis after doing some work

// let i = 1;

// while (i <= 5) {
//   console.log("Apna college");
//   i++;
// }

// '''''''''''''''''' DO WHILE LOOP ''''''''''''''''''//

// 1. again declare the variable outside the loop
// 2. it will do work fast before the condition thats why its name is Do - while loop
// 3. Write the Do first after writing add the increment(updation) i++;

// 4. Then Write the condition;

// let i = 20;

// do {
//   console.log("Apna college");

// } while (i <= 10);

// ''''''''''''There are anotehr 2 type of Loops ''''''''''//

// 1. For- of loop
// 2. For- in loop

// ''''''''''' 1. For-of loop practice //////////

// we use (for-of loop) for strings and arrays not for Object

//  no need to write conditon and updation

// let str = "ApnaCollege";
// let size = 0;
// for (let i of str) {
//   //iterator -> charachter
//   console.log("i = ", i);
//   size++;
// }
// console.log("String size = ", size);

// ''''''''''''''''''' for-in Loop """''''''''''''" //////

// we use it for object

// let student = {
//     Name : 'Mijanur Rahman',
//     age : 20,
//     cgpa: 3.45,
//     isPass: true
// }

// for(let key in student) {
//     console.log("key = ", key, "Value = ", student[key]);
// }

// `````````````````` Strings ```````````````````//

// 01. Create string
let str = "ApnaCollege";
let str2 = "Shradha";

//String Length
value = str.length;
console.log(str2.length);
console.log(value);

// String Indices. `````` singular form: index, Plural:- Indices
console.log(str[2]);

// For array and strings we use for-of loops // and for object we use for-in loop
// for(let i of str) {
//     console.log(i)
// }
