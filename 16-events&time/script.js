let button = document.getElementById("btn");

// addEventListener(event, evet se kya hoga)

// mouse events
button.addEventListener("click", ()=>{
    // alert("I was clicket.");
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click";
});

button.addEventListener("contextmenu", ()=>{
    alert("Don't right click please");
});

// keyboard events
document.addEventListener("keydown", (e)=>{   // e is an event object, second argument takes event argument
    // console.log(e);     // will print whatever we click on keyboard in the console
    console.log(e.key, e.keyCode);  // will give the key and its code we press on keyboard  
});