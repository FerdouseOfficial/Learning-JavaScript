// Classes and Objects

// practicing Inhertance

// class Parent {
//   hello() {
//     console.log("hello world");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }

  // sleep() {
  //   console.log("sleep");
  // }

  // work() {
  //   console.log("Do nothing");
  // }
}

// class Doctor extends Person {
//   work() {
//     console.log("Treat Patients");
//   }
// }

class Engineer extends Person {
  work() {
    console.log("Solve problems, build something");
  }
}

let jihad = new Doctor();
let jihadObj = new Engineer();
