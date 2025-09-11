// Chapter 04:- Arrays

// arrays - Collection of items :- stored linearly

// array is a special type of Object

// in array position/index matter. But in Object key matters.In the array the key is the index. Here its in pair or index:Value; like that

// let marks = [97, 82, 75, 64, 36];

// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);

// printing value of marks using index.

// console.log(marks[0])
// console.log(marks[2])
// console.log(marks[1])

//Changing value of array
// string is Immutable but array is mutable.
// console.log((marks[2] = 86));
// console.log(marks);

//// `````````````````````````` Looping over an Array  ``````````````````````` ////
//print all element of an array

// Applying Loops

// loops :- Iterable(string, object, arrays)
// we can also use for -in but its not suggested
// In array we apply for - of loop . in object we apply for - in loop. remember it
// for (let val of marks) {
//   console.log(val);
// }

// let heroes = [
//   "ironman",
//   "Hulk",
//   "Superman",
//   "Aquaman",
//   "Spiderman",
//   "Thor",
//   "Loki",
// ];

// for (let i=0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

// for(let hero of heroes) {
//     console.log(hero)
// }

// let cities = [
//   "Dhaka",
//   "Ranpur",
//   "Nageswari",
//   "Kurigram",
//   "Lalmonirhat",
//   "Chitagong",
// ];

// for (let city of cities) {
//   console.log(city);
// }

// ``````````````````````````` Arrays Methods in JS ``````````````````````````````//

// let foodItem = ["Tomato", "Mango", "Litchi", "JackFruit", "Plum", "Carrot"];

// console.log(foodItem);
// Push() :- add element to the end
// console.log(foodItem.push("Chips"));
//POP()   :- delete from end
// console.log(foodItem.pop())
// console.log(foodItem)
//toString():- convert it to string
// console.log(oodItem.toString())

// Concat:- concat multiple array

// let marvelHeroes = [
//   "Thor",
//   "Captain America",
//   "spiderman",
//   "ironman",
//   "Dr. Strange",
// ];
// let dcHeroes = ["superman", "batman"];

// let concatination = marvelHeroes.concat(dcHeroes);
// console.log(concatination);

// Unshift & Shift :- add element in the start, delete element in the start

// console.log(marvelHeroes.unshift("Antman"));
// console.log(marvelHeroes);
// console.log(dcHeroes.shift());

// slice method
// val = marvelHeroes.slice(1, 3);
// console.log(val);

// Splice method
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// val = num.splice(2, 4, "love", "Sucks");
// console.log(val);
// console.log(num);

//  we can use Splice to add, delete & Replace element using only splice

//  Add Element
// num.splice(2,0,102)

//  Delete Element
// num.splice(3,1)
//  Replace Element
// num.splice(3,1,102)
// console.log(num);