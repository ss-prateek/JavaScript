// let obj = {
//     a: 1,
//     b: "Prateek"
// };
// console.log(obj)
// // in JS the prototype of an obj is an obj

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps : true
// };
// rabbit.__proto__ = animal;  // sets rabbit.[[Prototype]] = animal
// // __proto__ is used to add more properites to an object
// // rabbit will have a prototype -> which will have eats : true
// // hence rabits.eats = true, without adding eats in rabbit object
// // prototype are additional properties to an obj

//___________________________________________________________________________________________________________

class Animals{
    constructor(name){
        this.name = name;   // "this." is a way to create a property to an object 
        console.log("Object is created")
    }
    // creating functions
    eats(){
        console.log("Eating")
    }
    jumps(){
        console.log("Jumping")
    }
}

let a = new Animals("Bunny");
// console.log(a)
// // Object is created, Animals {}
// //a. name Bunny, a.jumps() script.js:30 Jumping, a.eats()script.js:27 Eating

// // if we create a new class and want it should have all the properties of another class weused "extends"

class Lion extends Animals{
    constructor(name){
        // this.name = name;   
        // console.log("Object is created and he is lion")     
        // If we write like this error : Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Lion
        // correcct way :-
        super(name);        // to call parent constructor  // constructor of animals will first run, then
        this.name = name;   
        console.log("Object is created and he is lion");
    }
    // Method overriding -> if we want to change any func of class
    eats(){
        console.log("Eating Roar")  // Overrided the eats of Animals for this class
        // if we want that parents part of this function also runs  
        super.eats();   // will give : Eating, when l.eats() is called
    }
}

let l = new Lion("Sher");
// console.log(l);     // it will have protoype as Animals

// instanceof - kya object iss class se bana hai
console.log(l instanceof Lion); // true
console.log(l instanceof Animals); // true, because Lion class is made by extending Animals
console.log(a instanceof Lion);     // false

//__________________________________________________________________________________________________

// Getter & Setter

// class User{

//     constructor(name){
//         //invoke the setter
//         this.name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             console.log("Name is too short");
//             return;
//         }
//         this._name = value
//     }
// }
// let user = new User("Prateek")
// console.log(user.name);   // Prateek

// user = new User("");    // name is too short
//__________________________________________________________________________________________________
