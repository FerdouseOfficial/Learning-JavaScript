// Chapter 06: DOM Part-1

// DOM :- (DOCUMENT OBJECT MODEL)

// window Object
// The windo object represents an open window in a browser. it is browser's object (not JavaScript's) & is automatically created by broswer.

// it is a global object with lot of properties & methods.

// let h = document.getElementById("heading");
// console.log(h);

// let headings = document.getElementsByClassName("heading2-Class");

// console.dir(headings);
// console.log(headings)

// let paras = document.getElementsByTagName("p")
// console.log(paras)


// in query selector we need to write class and id just like we write in css with dot and # 
// let Doc = document.querySelector("p");
// let DocsAll = document.querySelectorAll("p");
// console.log(Doc);
// console.log(DocsAll);


// when we create a Div node tree :

// we have 3 things :- 3 types of node
// 1. text node 2. comment nodes 3. elements node

// we alwasy work on element nodes. we have to ignore text node and comment node

// console.log(document.body.firstChild)
// innerText property only show text
let div = document.querySelector("div");
console.log(div)

// innerHTML property show html tags with contents;
