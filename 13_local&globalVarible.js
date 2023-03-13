// link -> https://www.w3schools.com/js/js_scope.asp

let user = 'Shreyansh';

function check(user){
   let user = "Golu"; 
    return `Hello ${user}`;
}

let str = check();
console.log(str);