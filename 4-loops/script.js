console.log("Loops is JS")

// Type is loops is JS,
// for loop, for in loop, for of loop, while loop, do-while loop

// i) for loop

// let a = 5;
// for(let i = 1; i < 11; i++){        // (initiliztion; condition; updating)
//     console.log(a*i);
// }

// ii) for in loop - used for keys in an object

// let obj = {
//     name: "Prateek",
//     role: "Programmer",
//     company: "Google"
// }
// for(const key in obj){
//     const element = obj[key];
//     console.log(key, element);
// }

// iii) for of loop - used for iterations 

// for(const c of "Prateek"){
//     console.log(c);
// }

// iv) while loop

// let i = 1;
// while(i<6){
//     console.log(i);
//     i++
// }

// v) do-while loop - executes atleast once

let i = 10;
do{
    console.log(i);
    i++;
}while(i<6);