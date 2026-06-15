console.log("Script initialized");

let boxes = document.getElementsByClassName("box");
console.log(boxes);     // this will give html collection

// color - rgb(0-255,0-255,0-255)
//Math.random() gives an random no btw 0 & 1
// random no btw a & b = a + Math.random()*(b-a)
// this will give decimal nos, if we want only integers - Math.ceil(a + Math.random()*(b-a))

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{      // we can't apply forEach on html collection, so we make an array from the elements of boxes
    // console.log(e);
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})