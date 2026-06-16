// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(1);
//         }, 3000);
//     })
// }

// console.log("Loading Module")
// console.log("Load data")

// let data = getData();
// console.log(data);      // this will return a Promise, as it will take some time to fetch data
// it will show Promise{<pending>} while its not fully executed      
//Promise [[Prototype]]:Promise, [[PromiseState]]:"fulfilled", [[PromiseResult]]: 1

// console.log("process data")

// console.log("Task 2")       // tesk 2 will continue and exexute even if the Promise is not completed


// to stop the execution of the code ahed of the promise, our 1st approcj could be
// data.then((v) => {
//     console.log(data)
//     console.log("process data")

//     console.log("Task2")
// })
// but this is callback method

//___________________________________________________________________________________________________________

// async function

// async function getData(){       // async means the function will keep on running in the backgroud
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(1);
//         }, 3000);
//     })
// }
// console.log("Loading Module")
// console.log("Load data")
// let data = getData();
// console.log(data);    
// console.log("Process data")

// console.log("Task 2")

//___________________________________________________________________________________________________________

// here everything will be exected even when the promise is pending

// if we want to wait for the promise to be completed

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 3000);
//     })
// }

// async function main(){
//     console.log("Loading Module")
//     console.log("Load data")
//     let data = await getData();     // await -> waits for the promise, to use await it should be inside asyn function 
//     console.log(data);      // this will give the value of promise we will asign to resolve or reject
//     console.log("Process data")

//     console.log("Task 2")
// }

// main()

//___________________________________________________________________________________________________________

//Fetch API

async function fakeAPI(){
    // Simulate geting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')     // fetch api has 2 then, 1 for getting data and onr for passing to json form
//       .then(response => response.json())
//       .then(json => console.log(json))
    // let data = await x.text()    // we can also get the data in text form
    let data = await x.json()   // we will usually use json
    // JSON (JavaScript Object Notation) is a text format used to store and exchange data between applications, especially between a server and a web page.
    return data;
}

async function main(){
    console.log("Loading Module")
    console.log("Load data")
    let data = await fakeAPI();    // wait for promise to settle, if we will not await we will only get promise and not the data, it will be printed pending and cods ahead will be executed  
    console.log(data);      
    console.log("Process data")
}
main()

// Promise settle means resolve or reject 
// resolve means promise has settled succesfully
// reject means promise has not settled succesfully