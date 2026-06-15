console.log("Hello world");

document.body.firstElementChild         // first child which is an element
document.body.firstElementChild.childNodes  // all nodes insdie the 1st ele child including text and commment
document.body.firstElementChild.children    // all ele in the 1st ele child 
document.body.firstElementChild.children[3].nextElementSibling  // gives the next html ele after the 3rd child ele
document.body.firstElementChild.children[3].previousElementSibling  // gives the previous html ele before the 3rd child ele
document.body.firstElementChild.children[3].nextSibling // here it will give '#text' as this gives all nodes including text comments etc
document.body.firstElementChild.children[3].parentElement   //gives the parent element of the selecvted element
