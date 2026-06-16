// Promises - Solution ot the callback hell is promises

console.log("This is Promises");

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("False -1");        // reject will show error in console without catch, if we use catch it will take the reject input (here False) and show that in the console
    }else{
        setTimeout(() =>{
            console.log("I'm done -1")
            resolve("True -1")
        },2000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{       // used catch to remove showing error in console and the catch the error
//     console.log(err)
// });

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("False -2");        // reject will show error in console without catch, if we use catch it will take the reject input (here False) and show that in the console
    }else{
        setTimeout(() =>{
            console.log("I'm done -2")
            resolve("True -2")
        },2000);
    }
})

// let p3 = Promise.all([prom1, prom2])
// // Promise.all -> if both promises are resolved it will give : ['True -1', 'True -2'], if any one is rejected all others are ignored
// p3.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.allSettled([prom1, prom2])
// // Promise.allSettled -> it will retuen the status and value of the Promises, if rejected or resolved it will give the output. If rejected it will give the reason instead of value
// p3.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.race([prom1, prom2])
// // Promise.race -> Waits for the 1st promise to settle and its result/ error becomes the output
// p3.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.any([prom1, prom2])
// Promise.any -> waits for the 1st promise to fullfill (and not reject) and its result becomes the output. Throws AggregateError if all the promises are rejected
p3.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})