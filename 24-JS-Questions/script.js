// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["Harry","Won","Hermoine","Dumbelldor","Krishnanaendu","Prateek","Ravindranathan"];
// let houses = []

// for(const student of students){
//     if(student.length < 6){
//         houses.push("Gryffindor")
//     }else if(student.length < 8 && student.length >= 6){
//         houses.push("Hufflepuff")
//     }else if(student.length < 12 && student.length >= 8){
//         houses.push("Ravenclaw")
//     }else if(student.length >= 12){
//         houses.push("Slytherin")
//     }else{
//         alert("Name not valid")
//     }
// }
// console.log(houses)
//__________________________________________________________________________________________________
// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let arr = [2,3,4,4,5,6,6,7]
// function doubleTrouble(array){
//     let arr2 = []
//     for(let i = 0; i < array.length; i++){
//         arr2.push(array[i])
//         if(array[i+1] != array[i]){
//             arr2.push(array[i])
//         }
//     }
//     console.log(arr2)
// }
// doubleTrouble(arr);
//__________________________________________________________________________________________________
// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirror(String){
//     let arr = str.split("");    // as strings are immutable we will convert it into an array
//     // string.split(separator) here, "" means split by every character
//     let start = 0, end = arr.length-1;
//     while(start <= end){
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
//     console.log(String+arr.join(""))
//     // array.join(separator) -> It combines all array elements into a single string
// }

// let str = "Prateek"
// mirror(str)
//__________________________________________________________________________________________________
// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function passValidator(String) {
//     let len,upper,lower,digit;
//     if (String.length >= 8) {
//         len = 1
//     }
//     for (const char of String) {
//         if (char >= 'A' && char <= 'Z') {
//             upper = 1;
//         }
//         if (char >= 'a' && char <= 'z') {
//             lower = 1;
//         }
//         if (char >= '0' && char <= '9') {
//             digit = 1;
//         }
//     }
//     if (len && lower && upper && digit) {
//         console.log("Password is Valid")
//     } else {
//         console.log("Password not valid")
//     }
// }

// passValidator("rateek")
//__________________________________________________________________________________________________
// 5. The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumSelector(Array){
//     let sum = 0;
//     for(const ele of Array){
//         if(ele >= 0){
//             sum += ele
//         }else{
//             console.log(sum)
//             break
//         }
//     }
// }
// let arr = [1,2,3,4,-1]
// sumSelector(arr)
//__________________________________________________________________________________________________
// 6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function vowelCounter(String){
//     let count = 0;
//     let vowel = ['a','e','i','o','u','A','E','I','O','U']
//     for(const ele of String){
//         for(const vow of vowel){
//             if(ele == vow){
//                 count++;
//             }
//         }
//     }
//     console.log("Number of vowels : " + count)
// }
// vowelCounter("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

//__________________________________________________________________________________________________

// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// Note : setTimeout doesn't return the value after 500 ms. So we need something that can return a value later. That is exactly what a Promise is.

// In a promise Instead of return 10, we do resolve(10), because the value is coming later.

// function doubleAfterDelay(num){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num*2);     // resolve is return for a Promise
//         },500)
//     })
// }
// async function arrayMapping(Array){
//     for(let i = 0; i < Array.length; i++){
//         Array[i] = await doubleAfterDelay(Array[i]) // we need await to wait till rhe promise is resolved
//         // also awai can only be used inside an async func
//     }
//     console.log(Array)
// }
// let arr = [2,4,8]
// arrayMapping(arr)
//__________________________________________________________________________________________________

// 9. The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// function delayedMessage(){      // delayedMessage() already returns a Promise.
//     let delay = 5000*Math.random()
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Your Order has been Placed !!")
//         }, delay);
//     })
// }
// // async function placeOrder() {
// //     let message = await delayedMessage()
// //     console.log(message)
// // }
// // placeOrder()
// // OR
// async function placeOrder() {   
//     return delayedMessage();    // if we used then, we don't need to uses await for delayedMessage()
// }
// placeOrder().then((message) => {        
//     // when promise is resolved it prints the message, so then -> When this Promise is fulfilled, execute this function
//     console.log(message);
// });
//__________________________________________________________________________________________________

// 10. The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// function delayedMessage(type) {
//     return new Promise((resolve) => {
//         const delay = 2000 + Math.random() * 10000;

//         setTimeout(() => {
//             switch (type) {
//                 case "Cold Coffee":
//                     resolve("Your Cold Coffee is ready!");
//                     break;
//                 case "Latte":
//                     resolve("Your Latte is ready!");
//                     break;
//                 case "Mocha":
//                     resolve("Your Mocha is ready!");
//                     break;
//                 default:
//                     resolve("Your choice is not available!!");
//             }
//         }, delay);
//     });
// }
// // OR
// function delayedMessage(type){
//     if(type == "Cold Coffee"){
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Your Cold Coffee is ready !")
//             },2000 + 10000*Math.random())
//         })
//     }else if(type == "Latte"){
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Your Latte is ready !")
//             },2000 + 10000*Math.random())
//         })
//     }else if(type == "Mocha"){
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Your Mocha is ready !")
//             },2000 + 10000*Math.random())
//         })
//     }else{
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Your choice is not available !!")
//             }, 2000*Math.random())
//         })
//     }
// }

// async function brewCoffee(type) {
//     let message = await delayedMessage(type)
//     console.log(message)
// }

// brewCoffee("Latte")
//__________________________________________________________________________________________________

// 11. The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// function filterProducts(Array, filter){
//     let flag = 0
//     for(const item of Array){
//         if(item.category == filter){
//             console.log(item)
//             flag = 1
//         }else if(item.price == filter){
//             console.log(item)
//             flag = 1
//         }else if(item.name == filter){
//             console.log(item)
//             flag = 1
//         }
//     }
//     if(flag == 0){
//         console.log("No item found")
//     }
// }

// let products = [
//     { name: "Laptop", category: "Electronics", price: 50000 },
//     { name: "Shirt", category: "Clothing", price: 1200 },
//     { name: "Phone", category: "Electronics", price: 30000},
//     { name: "Jeans", category: "Clothing", price: 2000}
// ];
// filterProducts(products, 1)

//__________________________________________________________________________________________________




