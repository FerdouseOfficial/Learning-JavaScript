/**  Question 01:
 *          get user to input a number using Prompt("enter a   number:"). Check if the number is a multiple of 5 or not
 */

// let num = prompt("Enter A number : ");

// if (num % 5 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

/**Question 02:
 * Write a code which can give grades to students according to their scores:
 *  80-100,A
 * 70-89,B
 * 60-69,C
 * 50-59,D
 * 0-49,F
 */

let scores = prompt("Enter Your Score: ");

if (scores === "") {
  console.log("Please Enter The Score: ");
} else if (isNaN(scores)) {
  console.log("Strings is not valid. Enter the Score ");
} else {
  scores = Number(scores);
  if (scores >= 80) {
    console.log(scores, "Your Grade is A");
  } else if (scores <= 79 && scores >= 70) {
    console.log(scores, "Your Grade is B");
  } else if (scores <= 69 && scores >= 60) {
    console.log(scores, "Your Grade is C");
  } else if (scores <= 59 && scores >= 50) {
    console.log(scores, "Your Grade is D");
  } else if (scores <= 49 && scores >= 0) {
    console.log(scores, "Your Grade is F");
    console.log("You are failed. Better Luck next time.");
  } else {
    console.log("Enter a valid Score");
  }
}
