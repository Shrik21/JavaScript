/*

Link -> https://www.tutorialspoint.com/What-is-Conditional-Operator-in-JavaScript



*/

let num1 = 69
let num2 = 69

if(num1>num2)
    console.log("True");

else if(num2>num1)
    console.log("Nothing");

else
    console.log("False");    


    /* Ternary Operetors */

    console.log(num1>num2?"num1":"num2");



    // Switch cases

    let color = "pink";

    switch(color)
{

    case "red": console.log("Red");break;
    case "yellow" : console.log("yellow");break;
    default :console.log( "None of the color match");;

}