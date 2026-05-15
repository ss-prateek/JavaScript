console.log("Functions in JS");

// // Prinitng same set
// function nice(name){
//     console.log("Hey " + name + ", how are you?");
//     console.log("Hey " + name + ", you're good");
//     console.log("Hey " + name + ", your tshirt is good");
//     console.log("Hey " + name + ", your code is good");
// }

// let name = "Prateek";
// nice(name)
// nice("Shivam")

// // Sum of 2 numbers
// function sum(a, b, c = 3) {   // c is a default parameter, if c is passed as parameter with the func, it will used the passed value
//     // console.log(a+b);    // this doesn't return the sum
//     console.log(b);
//     return (a + b + c);
// }

// // sum(10, 6)

// let result1 = sum(11, 32);      // a=11,b=32,c=3
// console.log("The sum of these numbers is: ", result1);    // if console.log is used it will show undefined
// let result2 = sum(5, 10, 15);     // a=5,b=10,c=15
// console.log("The sum of these numbers is: ", result2);

// // if we don't pass a required parameter, it will become undefined inside the function & will give NaN output       undefined + any no = NaN (not a number)
// let result3 = sum(9);
// console.log("The sum of these numbers is: ", result3);

// // Arrow function - stored inside a variable

// const func1 = (x)=>{
//     console.log("I'm an arrow function", x);
// }
// func1(5);
// func1(10);
// func1(15);