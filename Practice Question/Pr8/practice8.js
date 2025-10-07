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

function getData(dataId) {
  setTimeout(() => {
    console.log(`data = ${dataId}`);
  }, 2000);
}

getData(23);
getData(2);
getData(3);
