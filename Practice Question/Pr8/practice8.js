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
// ------------------------------------------------
// this block is for explanation :
// Super simple analogy:

// Thing	Analogy
// getNextData	A closed gift box (may have a gift inside)
// getNextData()	Open the box to use the gift
// if (getNextData)	Check if there is a box first
// else	Not needed — if there’s no box, just skip
// --------------------------------------------------------
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

// Promises

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("some error occured");
// });

//  Solving the callback hell problem with promises

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log(`Data = ${dataId}`);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }

// // here is the callback hell

// getData(2, () => {
//     getData(3, () => {
//         getData(4, () => {
//             getData(5)
//         })
//     })
// })

// here is how we will solve it
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data = ${dataId}`);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }
// getData(1)
//   .then(() => {
//     return getData(2);
//   })
//   .then(() => {
//     return getData(3);
//   })
//   .then(() => {
//     return getData(4);
//   })
//   .then(() => {
//     return getData(5);
//   })
//   .then(() => {
//     return getData(6);
//   });

// Practing promises in simple way

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("fail");
//   });
// };

// let promise = getPromise();
// promise.catch(() => {
//   console.log("Failed for error");
// });
// promise.then(() => {
//   console.log("promise fulfilled");
// });


// Promise Chain 