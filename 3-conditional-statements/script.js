// console.log("Conditional Statments")

// // if-else
// let age = 5;

// if(age > 18){
//     console.log("You can drive");
// }else{
//     console.log("You cannot drive")
// }
// //___________________________________________________________________________________________________
// // Arithmenatic operator 
// // +,-,*,** (exponentiation), /, %, ++, --

// let age = 17;
// let grace = 2;
// console.log("Graced age is " + (age+grace));    // 17+2 = 19
// console.log("Graced age is " + (age-grace));    // 17-2 = 15
// console.log("Graced age is " + (age*grace));    // 17*2 = 34
// console.log("Graced age is " + (age**grace));   // 17**2 = 289
// console.log("Graced age is " + (age/grace));    // 17/2 = 8.5
// console.log("Graced age is " + (age%grace));    // 17/2 = 1 (remainder)
// // _________________________________________________________________________________________________
// // Assignment opeartors
// // = (x=y), += (x=x+y), -= (x=x-y), *= (x=x*y), %= (x=x%y), **= (x=x**y)
// // _________________________________________________________________________________________________
// // Comparison operator
// // == (equal to), != (not equal to), === (equal to and type), !== (not equal to or not equal type), > , < , >= , <= , ? (turnay opeartor)

// // Here, it will only compare values, not data type amd hence this prints true
// if(3 == "3"){
//     console.log("True")
// }else{
//     console.log("False")
// }

// // Here, it will also check data type, hence it returns False. It will check both value and data type
// if(3 === "3"){
//     console.log("True")
// }else{
//     console.log("False")
// }

// // Turnary operator (?)

// let a = 6;
// let b = 7;
// let c = (a>b)?(a-b):(b-a);       // (condition) ? (if true this) : (if false this)
// console.log(c);

// // _________________________________________________________________________________________________
// // Logical operators
// // && (logical and), || (logical or), ! (logical not)

// let age = 18;
// let type = "human";
// if(age>=18 && type=="human"){
//     console.log("can drive");
// }if(age<18 || type!= "human"){
//     console.log("can't drive");
// }

// let a = true;
// let b = !a;
// console.log(b)

// /*
// I'm a
// multiline
// comment
// */
// //___________________________________________________________________________________________________

// // if if-else else ladder

// let age = 15;
// if(age>0){
//     console.log("A valid age");
// }else if(age>=10 && age<=15){
//     console.log("You're a kid");
// }else if(age>18){
//     console.log("You're Adult")
// }else{
//     console.log("Invalid age");
// }
