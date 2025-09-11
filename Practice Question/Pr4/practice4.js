// Chapter 04:- Arrays

// arrays - Collection of items :- stored linearly

// array is a special type of Object

// in array position/index matter. But in Object key matters.In the array the key is the index. Here its in pair or index:Value; like that

let marks = [97, 82, 75, 64, 36];

console.log(marks);
console.log(marks.length);
console.log(typeof marks);

// Applying Loops

// In array we apply for - of loop . in object we apply for - in loop. remember it 
for (let val of marks) {
  console.log(val);
}
