// async function sleep(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 1000);
//     })
// }

// // let a = await sleep()
// // let b = await sleep()
// // error : Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

// // IIFE - immideatly invoked func expression, we create an immediately invoked fnc
// (async function main() {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()
// now error will not be there

//__________________________________________________________________________________________________

// Destructuring

// (async function main() {
//     // let x, y = [1,5]
//     // console.log(x,y)
//     // gives : undefined (2) [1, 5]

//     // let [x, y] = [1,5]
//     // console.log(x,y)
//     // gives : 1 5

//     // let [x, y, z] = [1, 5]
//     // console.log(x,y,z)
//     // gives : 1 5 undefined

//     // let [x, y, ...rest] = [1, 5, 8, 11, 45, 23]
//     // console.log(x,y,rest)   // rest is a variable - array which contains the rest of the elems 
//     // gives : 1 5 (4) [8, 11, 45, 23]

//     // Destructuring in objects
//     let obj = {
//         a : 1,
//         b : 2,
//         c : 3,
//     }
//     let {a,b} = obj     // this will take out a and from the obj
//     console.log(a,b) 
// })()

//__________________________________________________________________________________________________

// Spread Syntax

// function sum(a,b,c){
//     return a+b+c
// }

// let arr = [1,4,6]
// console.log(sum(arr[0],arr[1],arr[2]))
// // OR (both are identical)
// console.log(sum(...arr))    // ... is spread operator, it opens the array

// // we can make an object from an array
// const obj = {...arr}
// console.log(obj)        // gives : {0: 1, 1: 4, 2: 6}

//__________________________________________________________________________________________________

// Hoisting

console.log(a1) //undefined if used var, Cannot access 'a1' before initialization if used let
// var a1 = 6   // we can use a1, before this line in the code but it will be undefined
// var will host the variable on the top of the block inside which it is declared
let a1 = 7

console.log(a2)     // Cannot access 'a1' before initialization as a2 is hosted inside a block and we are uing it outside that block
{
    var a2 = 5;
}

// we can make function like this too
// if we use let or const, we can't use it before defining 