/*
link -> https://www.w3schools.com/js/js_arrays.asp

*/


let values = [];

// Inserting the values in array
values.push(5);
values.push(56);
values.push(45);
values.push(564);


// fetching the values from array
values[1];
values[10];
values[3];

console.log(values[1]);

// In javaScript we can add diffrent dataTypes in single arrays

let data = ['Shreyansh',45,{tech:'Java'},
function(){console.log("Hello World");}
]

data[3]();



// Push And pop operations on Arrays
let arr = [64,535,2,4,563,353];

// This will print length of array after pushing the element
console.log(arr.push(56));
console.log(arr);

// pop will remove last element from the array
console.log(arr.pop());
console.log(arr);


// Shift will remove first element from the array
console.log(arr.shift());
console.log(arr);

// unshift will add element at first position in the array
console.log(arr.unshift(67));
console.log(arr);

// splice will remove values on specific index
console.log(arr.splice(3)); 
console.log(arr)

console.log(arr.splice(1,1));
console.log(arr);


/* 
Array destructuring 
*/

let nums = [45,34,24,53,45,3];
console.log(nums);

let [a,b,c,,e,f] = nums
console.log(f);

//swaaping in js
let p = 9
let q = 95;

[p,q] = [q,p]

console.log(`The value of P is ${p} and the value of q is ${q}`);

//Spilt use in array
let world = "My Name is Shreyansh Kumar".split(' ')
console.log(world);