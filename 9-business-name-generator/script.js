/* Create a business name generator by combining list of adjectives and shop name and another word
        Adjectives: Crazy, Amazing, Fire 
        Shop Name: Engine, Foods, Garments
        Another Word: Bros, Limited, Hub */

let first, second, third;
//Generating the 1st word
let rand1 = Math.random();   //generates random no btw 0 to 1
if(rand1 < 0.33){
    first = "Crazy";
}else if(rand1 < 0.66 && rand1 >= 0.33){
    first = "Amazing";
}else{
    first = "Fire";
}
//Generating the 2nd word
let rand2 = Math.random();   //generates random no btw 0 to 1
if(rand2 < 0.33){
    second = "Engine";
}else if(rand2 < 0.66 && rand2 >= 0.33){
    second = "Foods";
}else{
    second = "Garments";
}
//Generating the 3rd word
let rand3 = Math.random();   //generates random no btw 0 to 1
if(rand3< 0.33){
    third = "Bros";
}else if(rand3 < 0.66 && rand3 >= 0.33){
    third = "Limited";
}else{
    third = "Hub";
}
console.log(first + " " + second + " " + third);