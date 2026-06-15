console.log("Prateek");

// selecting ele by class
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// i) selecting ele by ID
// document.getElementById("exp").style.backgroundColor = "green";

// ii) by css selector  - it will apply the efect on the 1st ele which matches the selector
// document.querySelector(".box").style.backgroundColor = "brown";
// document.querySelector(".box") returns the 1st ele with the class box

// to select all
// document.querySelectorAll(".box")
//this returns a html collection which has all th elements with class box
// we need to use loop to access the elements of the node list / html collection
// we will use for each loop
/*
document.querySelectorAll(".box").forEach(e=>{
    // console.log(e);      this will give each ele
    e.style.backgroundColor = "blue";       // will change each ele's background color to blue
});
*/
// iii)selecting by tag name
// console.log(document.getElementsByTagName("div"));

// iv) matches, closest & contains method

// matches
// let e = document.getElementsByTagName("div");
// console.log(e[4].matches("#exp"));  //check whether selected ele matches the css selector we said, here checking does this ele has a id = exp, here it will return true
// console.log(e[3].matches("#exp"));  // here it will retunr false

// closest - to look for the nearest ancestor of that matches the given CSS-selector. The ele itslef is also checked
// console.log(e[3].closest(".container"));    // as e[3] itself dont have selector as conatiner it goes to its parent div which has class container hence it returns that
// console.log(e[3].closest("html"));  // this will return <!DOCTYPE html>
// console.log(e[3].closest("#exp"));  // return null as neither the ele nor any parents have this selector 

// contains - returns true if eleB is inside eleA or when eleA==eleB Syntax: eleA.contains(eleB)
let e = document.getElementsByTagName("div");
console.log(document.querySelector(".container").contains(e[0]));   // true -> it contains itself
console.log(document.querySelector(".container").contains(e[3]));   // true 
console.log(document.querySelector(".container").contains(document.querySelector("body"))); // false
console.log(document.querySelector("body").contains(document.querySelector(".container")));