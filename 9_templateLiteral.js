/*

Link -> https://www.w3schools.com/js/js_string_templates.asp

*   In below example if we use $ symbol with variable in backtic (`) 
    then it's called template litrel 
*   In back tic whatever we writr it will print as it is.

*/

let num1 = 78;
let num2 = 89;

let result = num1 + num2

// With template literals
console.log( `The addition of ${num1} and ${num2} is: ${result} ` );
console.log(`My name is Shreyansh Kumar
I am working in EXL as Senior Softeware Developer
`);


// Without template literals
console.log("The addition of "+num1+" and "+num2+" is: "+result);
console.log("My name is Shreyansh Kumar \nI am working in EXL as Senior Softeware Developer");