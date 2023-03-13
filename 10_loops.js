/*

Link -> https://www.w3schools.com/js/js_loop_for.asp

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true


*/


// for loop
for (let i =1; i <= 10; ++i) {
   // console.log(i);
}


//while loop
let x = 11;

while(x<=10){

    //console.log(x);
    x++;
}


// do while loop
do {
   // console.log(x);
    x++;
} while (x<=10);


// for in loop



// for of loop -> mostly it used mostly for arrays
const names = ["Infosys","Exl","Wallmart","Principal Global"];

for (const n of names) {
   // console.log(n);
}


// for in loop -> for in used mostly for Objects

const symbols = {

    YT : "YouTube",
    fb : "Facebook",
    ln : "LinkedIn"
};

for (const n in symbols) {
    console.log(symbols[n]);
}