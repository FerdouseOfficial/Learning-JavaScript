// Callback, promises & Async-wait

// function hell() {
//     console.log("Hello");
// }

// setTimeout(hell, 3000); //timeout 3s = 3000ms

// Callback

// function sum(a, b) {
//   console.log(a, b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, sum);

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(`data = ${dataId}`);
//     getNextData();
//   }, 2000);
// }

// getData(1, getData(2));

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(`data = ${dataId}`);
//     getNextData();
//   }, 2000);
// }

// getData(1, () => {
//     getData(2)
// });

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(`data = ${dataId}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// // This is called callback hell 
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });



