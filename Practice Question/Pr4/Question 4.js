//`````````````````````````````` Question 01:->`````````````````````````````

// For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the enitrer class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// // for (let i = 0; i < marks.length; i++) {}
// // console.log(sum);

// for(let val of marks) {
//     sum += val
// }
// let average= sum / marks.length
// console.log(average)

//``````````````````````````````````````Question 02: ```````````````````````````
// For a given array with prcie of 5 items -> [250,645,300,900,50]. All items have an offer of 10% off on them. Change the array to store final praice after applying offter

// let items = [250, 645, 300, 900, 50];

// let i=0;
// for(let val of items) {
//     let offer = val /10;
//     items[i] = items[i] - offer
//     console.log(`value after offer = ${val}`)
// }

// for(let i=0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -=offer;
//     console.log(`Value after the offer is ${items[i]}`)
// }

// ```````````````````````````` Question 03:```````````````````````````````

// Create an array to store comapnies -> "bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let comapnies = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comapnies);

let rem = comapnies.shift();
console.log("Removing the first company = ", rem);
console.log(comapnies);
comapnies.splice(1, 1, "ola");
console.log(comapnies);
let add = comapnies.push("Amazon");
console.log(comapnies);
