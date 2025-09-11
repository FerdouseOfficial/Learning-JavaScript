// Chapter 06: DOM (Document Object Model)

// Problem one SOlved
// let add = document.querySelector("h2");

// add.innerText = add.innerText + " from Apna College Studnets";

// Problem 02:-

let UniqueText = document.querySelectorAll(".box");
let idx = 1;
for (let div of UniqueText) {
  div.innerText = `unique text ${idx}`;
  idx++;
}

// UniqueText[0].innerText = "new Unique text 01";
// UniqueText[1].innerText = "new unique text 02";
// UniqueText[2].innerText = "new unique text 03";
