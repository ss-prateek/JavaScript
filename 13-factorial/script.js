let num = 6;
let f = 1;
if(num == 0){
    console.log(1);
}else if(num < 0){
    console.log("Factorial does not exist");
}else{
    for(let i = 2; i <= num; i++){
        f = f*i;
    }
    console.log(f);
}

let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys());   //keys() gives the indexes of the array
    // Array(7).keys()  produces: 0,1,2,3,4,5,6
    // Array.from() -> Converts that iterator into a real array
    console.log(arr.slice(1,));         //slice(1,) means start from index 1 till the end.
    let c = arr.slice(1,).reduce((a,b)=>{       //reduce() automatically passes two values into the callback function: (previousValue, currentValue), we named it (a,b)
        return a*b;     // this updates a
    })
    return c;
}

let fact = factorial(a);
console.log(fact);
