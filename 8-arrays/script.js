console.log("Arrays in JS");

// let arr = [1, 2, 4, 5, 7];
// Index : 0, 1, 2, 3, 4
// console.log(arr);
// to get length of an array
// console.log(arr.length);

// array is mutable
// console.log(arr[0]);
// arr[0] = 56;
// console.log(arr[0]);

// in JS type of array is object
// console.log(typeof arr);
//__________________________________________________________________________________________________
// Methods of arrays

// i) toString() -> Converts array to string with comma seperated value
// let n = [1,7,9,11];
// console.log(n.toString());

// ii) join() -> joins all the array elements using a separator
// console.log(n.join("-"));

// iii) pop() -> remove last element from the array
// console.log(n.pop());   // update the original array, returning the popped value
// console.log(n);

// iv) push() -> adds a new element at the end of the array
// console.log(n.push(9));  // modifies the original array, returns the new array length
// console.log(n);

// v) shift() -> removes 1st element and returns it
// console.log(n.shift());
// console.log(n);

// vi) unshift() -> adds element to the begining, returns new array length
// console.log(n.unshift(3));
// console.log(n);

// vii) delete -> elements can be deleted using this operation
// delete n[1];    // deleted item at the given index and at that place 'empty item' is printed
// console.log(n);
// console.log(n.length);  // lenth will still be th same
// console.log(n[1]);      // printing deleted item will show 'undefined'

// viii) conact() -> used to join arrays to the given array

// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [9,8,7];
// console.log(a1.concat(a2,a3));   //Retruns a new array doesn't change the existinf array

// ix) sort() -> used to sort an array alphabetically
// console.log(n.sort());      // modiefies the real array
// as n = [1,7,9,11] it is going to give [ 1, 11, 7, 9 ] not [1,7,9,11] as JS sort func sort an array alphabetically, lexicographically (dictionary order)
// we need to give compare fnc to sort it as we want to

// x) splice() -> can be used to add new items to an array

// const num = [1,2,3,4,5];
// arr.splice(position to add, no of elements to remove, elements to be added)
// num.splice(2,1,23,24);  // this will delete 3 and add 23, 24 at index 2, 3
// console.log(num);

// xi) slice() -> slices out a piece from an array. It creates a new array

// const num = [1,2,3,4,5];
// arr.slice(staritng index, end index)
// if we dont provide end index, it takes till end of the array
// console.log(num.slice(2));
// console.log(num.slice(1,3));

// xii) reverse() -> reverses the array
// console.log(num.reverse());  // modifies the original array

//___________________________________________________________________________________________________

// Looping through an array

// let a = [1, 93, 5, 6, 88];

// i) for loop

// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// ii) foreach loop -> it is a method of array, it takes a callback function as an argument and calls that function for each element in the array

// a.forEach((value, index, array) => {
//     // function logic
// });

// a.forEach((value, index, array) => {
//     console.log(value+ " at index " + index);
// });

// iii) for if loop -> for objects 

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// for(const key in obj){
//     if(Object.hasOwnProperty.call(obj, key)){   // Object.hasOwnProperty.call(obj, key) is a safe way to check whether key is a direct property of obj (not inherited from its prototype chain).
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// iv) for of loop -> for arrays

// let a = [1, 93, 5, 6, 88];
// for (const element of a) {
//     console.log(element);
// }

//__________________________________________________________________________________________________

// map() -> Creates a new array by performing some operations on each array element

// const arr = [1,2,3];
// let newArr = arr.map((value, index, arr) => {   // we can only give (value) instead of (value, index, arr), as we are working only on values in this example code
//     return value*value;
// });
// console.log(newArr);

// filter() -> Filters an array with values that passes a test. Creates a new array

// const arr = [1,2,3,4,5,11,22];
// const greaterThanSeven = (x) =>{
//     if(x > 7){
//         return true;
//     }else{
//         return false; 
//     }
// }
// console.log(arr.filter(greaterThanSeven));

// reduce method -> reduce an array to a sungle value

// let n = [1,8,7,11];
// const add = (x,y) =>{   // this func is not made for the array its just a sum function of 2 ele
//     return x+y;
// }
// console.log(n.reduce(add));     // reduce method use the add func and add the ele of array using 2 ele one by one

// Array.from() -> converts different object to an array

console.log(Array.from("Prateek"))
