
// let a = prompt("Enter 1st number : ")
// let b = prompt("Enter 2nd number : ")
// let sum = a+b       // here both a and b are strings so + will append (add b to a)
// console.log("The sum is ", sum)
// this is a wrong code
// if 1st no is 67 and 2nd is 12, it will print 6712 in the console
// By default when we use prompt it gives us string

// correction :-
// let a = prompt("Enter 1st number : ")
// let b = prompt("Enter 2nd number : ")
// let sum = parseInt(a) + parseInt(b)     // it will convert a and b to int
// console.log("The sum is ", sum)

// if we give no 1 as Prateek and no 2 as Singh -> it will give NaN in the console
// because parseInt(String) = NaN (not a number)

// as JS is forgiving it will not show error, so to fix

let a = prompt("Enter 1st number : ")
let b = prompt("Enter 2nd number : ")
if(isNaN(a) || isNaN(b)){       // if any of the no is not a number
    throw SyntaxError("Sorry this is not allowed")      // we throw an error
    //there are different types of error
}
let sum = parseInt(a) + parseInt(b)     
console.log("The sum is ", sum)

// console.log("Value : ", sum*x);     // Uncaught ReferenceError: x is not defined
// if we don't want this error, we'll handle this error
// try {
//     console.log("Value : ", sum*x);     // Uncaught ReferenceError: x is not defined, if we put it out of try
//     // now this will not come is red as error
// } catch (error) {
//     console.log("here is the error")        // if it will be error it will execute this part
// }
// finally{                // here even if the code insdie finally is out without finally it will not affect anything                                
//     console.log("Files are being closed")
// }

// Finally is used inside a func

function main(){
    let x = 1;
    try {
        return true;
    } catch (error) {
        return false;
    }
    // console.log("Files are being closed")        // here once return is hit, the code ahead will not be executed, hence this will not be printed in console
    finally{
        console.log("Files are being closed")   //the finally block will still be executed even if return is hit, and hence finally will alwyas run, in any condition -> useful in cases like inside functions
    }
}

let c = main();


