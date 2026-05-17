console.log("Strings in JS")

// let name = "Prateek";
// console.log(name);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
//console.log(name[7]);   // this is out of string's index, it will show undefined

// let friend = "Shivam";
// console.log("His name is " + name + " and his friend name is " + friend);
// this can also be written as              using ` (backtic), we can also use "" inside it
// console.log(`His name is ${name} and his friend name is ${friend}`);

// let a = "Roh\"an";  // "\" is a escape sequene character
// "\n" -> new line, "\t" -> tab

// String methods

// i) str.toUpperCase(), str.toLowerCase() -> these both are function and hence we need () at the end to run it

let a = "Siddarth";
console.log(a.toUpperCase());
console.log(a.toLowerCase());

// ii) str.lenth -> to find length of a string, it is a property so () is not needed
console.log("The length of string a is : " + a.length);

// iii) str.slice(index 1, index 2) -> slices the string and give the characters is the given interval of index, index 1 is included and index 2 is not

let b = "Harry";
console.log(b.slice(2,4));  // will give "rr"
console.log(b.slice(2));    // it will take index 1 = 2 and goes till end

// iv) str.replace(" ", " ")

let c = "Prateek";
console.log(c.replace("Pra","Nain"));
// if there are two occurences of Pra only 1st occurence of Pra will be replaced
console.log(c.replace("Pra","30"));

// v) str1.concat(str2)

let str1 = "Prateek";
let str2 = " singh";
let str3 = str1.concat(str2," sisodia"," okay");    //whatever we will give in concat, it will be added to the main str in the same order
console.log(str3);

// strings are immutabel, the real string will not change by any methods
console.log(a);
console.log(b);
console.log(c);