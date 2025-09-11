// Chapter 04:- Arrays

// arrays - Collection of items :- stored linearly

// array is a special type of Object

// in array position/index matter. But in Object key matters.In the array the key is the index. Here its in pair or index:Value; like that

let marks = [97, 82, 75, 64, 36];

console.log(marks);
console.log(marks.length);
console.log(typeof marks);

// printing value of marks using index.

// console.log(marks[0])
// console.log(marks[2])
// console.log(marks[1])

//Changing value of array
// string is Immutable but array is mutable.
console.log((marks[2] = 86));
console.log(marks);

//// `````````````````````````` Looping over an Array  ``````````````````````` ////
//print all element of an array 

// Applying Loops

// loops :- Iterable(string, object, arrays)

// In array we apply for - of loop . in object we apply for - in loop. remember it
// for (let val of marks) {
//   console.log(val);
// }

let heroes = ["ironman",]