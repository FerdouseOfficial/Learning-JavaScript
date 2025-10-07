// Classes and Objects

// practicing Inhertance

// class Parent {
//   hello() {
//     console.log("hello world");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//   constructor() {
//     this.species = "homo sapiens";
//   }
//   eat() {
//     console.log("eat");
//   }

// sleep() {
//   console.log("sleep");
// }

// work() {
//   console.log("Do nothing");
// }
// }

// class Doctor extends Person {
//   work() {
//     console.log("Treat Patients");
//   }
// }

// class Engineer extends Person {
//   work() {
//     console.log("Solve problems, build something");
//   }
// }

// let jihad = new Doctor();
// let jihadObj = new Engineer();

// lets practice

// Qs. You are creating a website for your college. Create a class (User) with 2 properties, name & email. It also has method called (vieData()) that allows to viw website data.

// Qs. Create a new class called Admin which inherits from (User). Add a new method called editData to Admin that allows it to edit website data.

class User {
  constructor(name, email) {
    this.userName = name;
    this.userEmail = email;
  }

  viewData() {
    console.log("Here is All Data of Website");
    console.log(`${this.name} is UserName(Student Name)`);
    console.log(`${this.email} is UserEmail(Student Email)`);
  }
}

class Admin extends User {
  constructor(Name, Email) {
    super(Name, Email);
  }
}

const Student1 = new User("Arafat", "mdarafat@gmail.com");
const Student2 = new User("Mijanur", "mdmijanur23@gmail.com");

let dean = new Admin("Dean", "Dean@gmail.com");
