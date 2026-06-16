// JS - Asynchronous action 

console.log("hello")
console.log("hii")
// here these 2 will run in the written order
setTimeout(() => {
    console.log("I am inside SetTimeout1")
},2000);
// setTimeout will be delayed but the code after that will ececute (before it)
//even if setTimout is given 0 ms time, it will still execute afterwards
setTimeout(() => {
    console.log("I am inside SetTimeout2")
},0);
console.log("end")

//___________________________________________________________________________________________________________

// Call Back function - A callback function in JavaScript is a function that is passed as an argument to another function and is executed later (usually after some operation is completed).
// eg:-
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
// function sayBye() {
//     console.log("Goodbye!");
// }
// greet("John", sayBye);


const callback = (arg) =>{
    console.log(arg);
}
const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Prateek");
    document.head.append(sc)
}

loadScript("https://fonts.googleapis.com/css?family=Arvo",callback)
//___________________________________________________________________________________________________________



