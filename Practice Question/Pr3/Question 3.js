// Question 01
// Print all even(jora) number from 0 to 100

// Solving

// for(let i=0; i<=100; i++){
//     if(i%2 ===0){
//         console.log("num = ",i);
//     }
// }

// Question 02
// Create a game where you start with any random game number.Ask the userto keep guessing the game number until the user enters coreect value.

// MY solution
// let User_input = prompt("Guess the Number(0-20) :- ");

// for (let i = 1; i <= 50; i++) {
//   if (User_input === 4) {
//     console.log("Congratualtion. You Enter the Correct Value");
//     alert("Your The Winnder");
//     break;
//   } else {
//     prompt("Guess again");
//   }
// }

//           String Practice Question               /////

// Question 01

//      Prompt the user to enter their full name. Generate a usernmae for them based on the input. Start usesrname with @, followed by their full name and ending with the fullnmae lenght.


let userInput = prompt("Enter Your Full Name :- ");

let userName = `@${userInput}${userInput.length}`
console.log(userName)
