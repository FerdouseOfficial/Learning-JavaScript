// Classes and Objects

// const student = {
//   fullName: "Jihad Molla",
//   marks: 95.2,
//   printMarks: function () {
//     console.log(`marks = ${this.marks}`);
//   },
// };

// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// let mijanur = {
//   salary: 30000,
// };
// let mijanur2 = {
//   salary: 30000,
// };

// let mijanur3 = {
//   salary: 80000,
//   calcTax() {
//     console.log("Tax rate is 20%");
//   },
// };

// let mijanur4 = {
//   salary: 30000,
// };

// mijanur.__proto__ = employee;
// mijanur2.__proto__ = employee;
// mijanur3.__proto__ = employee;
// mijanur4.__proto__ = employee;

// Practicing concepts of Classes:-

// class ToyotaCar {
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }
//   setBrand(brand) {
//     this.brandName = brand;
//   }
// }

// let Supra = new ToyotaCar();
// Supra.brandName = "Supra";
// let Fortuner = new ToyotaCar();
// Fortuner.brandName = "Fortuner";
//

// function myfunc() {
//   var _names = "Hasan";
//   console.log(_name);
// }
// // console.log(myfunc)
// // myfunc()

// console.log(typeof (5 + 10));

// Now Practicing

class Parent {
  hello() {
    console.log("hello World");
  }
}

class Child extends Parent