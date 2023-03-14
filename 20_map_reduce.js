
let nums = [34,2,42,4,53,24,24,5];


nums.forEach(element => {
    console.log(element);
});

let evenNums = nums.filter(n=>n%2===0)
console.log(evenNums);

// Its gives uh true and false values
let evenNumsMap = nums.filter(n=>n%2===0)
console.log(evenNums);

nums.filter(n => n>10)
    .forEach(n =>{
        console.log(n);
    })


    nums.filter(n => n>10)
    .map(n=> n+89)
    .forEach(n =>{
        //console.log(n);
    })


   let result =  nums.filter(n => n>10)
        .reduce((a,b) => a+b)

    console.log(result);