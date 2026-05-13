console.log("Hey this is a demo")


// var a = 5;
// a = a + 1;      //this is allowed
// var b = 6;
// var c = "Prateek"
// var _n = "Siddarth"
// // var 55n = "Anu"          This is invalid
// // var is case sensitive

// console.log(a+b+8)
// console.log(typeof a, typeof b, typeof c)

// const a1 = 6
// a1 = a1 + 1         // this is not allowed, we can't update a const var, if we update it will show an error - "assignemt to constant not allowed"

// if we use let, we make the var global

let a = 5;
// a = a + 1;      
var b = 6;
let c = "Prateek"
let _n = "Siddarth"

{
    let a = 66
    console.log(a)
    // inside this block a will be 66
    var b = 56
    // var will update b, and it will 56 here as well as outside the block
}

console.log(a);
// here it will be 5, as let is global
console.log(b);
// it will be 56, as var is not global



// Primitive data type
// NULL, Number, String, Symbol, Undefined, Boolean, BigInt

let x = "prateeek";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log("x is " + typeof x,"y is " +typeof y,"z is " + typeof z,"p is " + typeof p,"q is " + typeof q, "r is " + typeof r)

// The typeof null operator returns "object" in JavaScript because it is a legacy bug from the language's first version that cannot be fixed due to backward compatibility (bhot sare codes are depended on null as object so we can't change it)
// The value null was represented as a NULL pointer (all zeros, 0x00), which shared the same object type tag (000) as actual object references.

// Object data type

let o = {
    "name" : "Prateek",        // in name we can and cannot use " ", as there is no space
    "job code" : 5600,         // need " " as there is a space btw job and role 
}

console.log(o);
o.salary = "1Cr"    // new object key will be added
console.log(o);
o.salary = "1.5Cr"  // object key value will get update
console.log(o);
