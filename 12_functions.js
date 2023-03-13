/**
 * 
 *  Link -> https://www.w3schools.com/js/js_functions.asp
 * 
 */

function add (n1,n2){
    return n1 + n2;
}

let x = add(78,89);
console.log(x);


// function expression
let fun = function(x,y){    // -> this is an annyonymous function
        return x+y;
}

console.log(fun(56,78));
console.log(fun);