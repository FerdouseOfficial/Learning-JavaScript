/**
 * Demonstrates the use of arithmetic and unary operators in JavaScript.
 *
 * Variables:
 *   - a {number}: First operand for arithmetic operations.
 *   - b {number}: Second operand for arithmetic operations.
 *
 * Arithmetic Operators:
 *   - Addition (+): Adds two operands.
 *   - Subtraction (-): Subtracts the second operand from the first.
 *   - Multiplication (*): Multiplies two operands.
 *   - Division (/): Divides the first operand by the second.
 *   - Modulus (%): Returns the remainder after division.
 *   - Exponential (**): Raises the first operand to the power of the second.
 *
**/

// let a = 5;
// let b = 2;

// console.log("a+b =", a + b); // Addition 
// console.log("a-b =", a - b); // Subtraction
// console.log("a*b =", a * b); // Multiplicatoin
// console.log("a/b =", a / b); // Division
// console.log("a%b =", a % b); // Modulus
// console.log("a**b =", a**b); // Exponential

// above, all the operators need two operand to perform their work

                // But Unary Operator need only 01 //
         
//  * Unary Operator:
//  * A unary operator only needs one operand to perform its operation.
//  * উদাহরণস্বরূপ, ইউনারি অপারেটর শুধুমাত্র একটি মানের উপর কাজ করে।
//  * For example, the increment (++) and decrement (--) operators are unary operators.
//  */

// a++;
// console.log("a = ", a) // Increment Opeartor

// a--;
// console.log("a = " , a); //Decrement Operator

                        // Explanation of Increment & Decrement //

//  * Unary Operators:
//  *   - Increment (++) and Decrement (--): Increase or decrease a variable's value by one.
//  *     These operators can be used in two ways:
//  *       - Post-Increment (a++): Increases the value after the current operation.
//  *       - Pre-Increment (++a): Increases the value before the current operation.
//  *       - Post-Decrement (a--): Decreases the value after the current operation.
//  *       - Pre-Decrement (--a): Decreases the value before the current operation.
//  */

// /*
//  * Post-Increment and Pre-Increment, Post-Decrement and Pre-Decrement explained:
//  *
//  * English:
//  * - Post-Increment (a++): The value of 'a' is used first, then increased by 1.
//  * - Pre-Increment (++a): The value of 'a' is increased by 1 first, then used.
//  * - Post-Decrement (a--): The value of 'a' is used first, then decreased by 1.
//  * - Pre-Decrement (--a): The value of 'a' is decreased by 1 first, then used.
//  *
//  * বাংলা:
//  * - Post-Increment (a++): 'a' এর মান আগে ব্যবহার হয়, তারপর ১ বাড়ে।
//  * - Pre-Increment (++a): 'a' এর মান আগে ১ বাড়ে, তারপর ব্যবহার হয়।
//  * - Post-Decrement (a--): 'a' এর মান আগে ব্যবহার হয়, তারপর ১ কমে।
//  * - Pre-Decrement (--a): 'a' এর মান আগে ১ কমে, তারপর ব্যবহার হয়।
//  */



                        // Assignment Operators // 
//   =, +=, -=, %=, **=

// let a = 5;
// let b = 2;

// a += 4;
// console.log("a = ", a);

// a -= 2;
// console.log("a =", a);

// a %= 2;
// console.log("a = ", a);

// a **= 3;
// console.log("a = ", a);


                    // Comparison Opeartor //

// ==, ===, !=, !==, >, >=, <, <=

// Simpler Version:- ==, !=. (Only Check the Values inside the Variable)

// Stricter Version: ===, !==. (Not only check value also check the Data types of both . Are they matching or not)

// <, <=, >, >= : for simple comparison

// let a = 5;
// let b = 2;
// let c = "5";

// console.log("a == b", a==b);
// console.log("a != b", a != b);
// console.log("a === c", a === c);
// console.log("a !== c", a !== c);
// console.log(a>b, b<a, b<=a, b>a, b>=a)








                    // Logical Opearators //
            //  AND = && , OR = || , NOT = !

// let a = 5;
// let b = 2;

// let cond1 = a>b;
// let cond2 = a == 5;

// console.log(cond1 && cond2);
// console.log(cond1 || cond2);
// console.log(!(cond1 && cond2));








                            // Conditional Statement //

// let age = 18;

// if(age >= 18) {
//     console.log("You can Vote");
// }
// else{
//     console.log("You cannot vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// }else if (mode== "light"){
//     color = "White";
// }
// console.log(color)
a = 5

if (a%2 == 0) {
    console.log(a ,"This is a ODD Nmber");
}else{
    console.log(a ,"This is a EVEN Number ");
}