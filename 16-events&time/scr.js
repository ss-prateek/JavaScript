// document.querySelector(".child").addEventListener("contextmenu",()=>{       // contextmenu -> right click
//     alert("Child was right clicked");
// })

// document.querySelector(".childConatiner").addEventListener("contextmenu",()=>{       
//     alert("ChildContainer was right clicked");
// })

// document.querySelector(".container").addEventListener("contextmenu",()=>{       
//     alert("Container was right clicked");
// })

// here when JS does bubbling by default, i.e., whe we click on child it will show "Child was right clicked","ChildContainer was right clicked" & "Container was right clicked"; when we click on childContainer it will show "ChildContainer was right clicked" & "Container was right clicked"; when we click on container it will show "Container was right clicked"

// if we don't want bubbling, we need to stopPropagation manually 
// take an event object

document.querySelector(".child").addEventListener("contextmenu",(e)=>{       
    e.stopPropagation();
    alert("Child was right clicked");
})

document.querySelector(".childConatiner").addEventListener("contextmenu",(e)=>{       
    e.stopPropagation();
    alert("ChildContainer was right clicked");
})

document.querySelector(".container").addEventListener("contextmenu",(e)=>{       
    alert("Container was right clicked");
})
//___________________________________________________________________________________________________________
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
// Set-Interval - helps to run a code in an interval of time


// let a = setInterval(()=>{
//     document.querySelector(".child").style.background = getRandomColor();
// }, 1000);               // 3000 is time in ms

// clearInterval(a);       // this wills top the repeating of code in interval
//___________________________________________________________________________________________________________
// SetTimenout - tge code will be executed only once after the guvne time interval

let a = setTimeout(() => {
    document.querySelector(".child").style.background = getRandomColor();
}, 1000);

clearTimeout(a);    //to stop the timeout