/*

Set -> It only store unique values

*/

let strCharSet =  new Set("shreyansh");
console.log(strCharSet);

let nums = new Set();

nums.add(5);
nums.add(56);
nums.add(55);
nums.add(53);
nums.add(55);
nums.add(5);

console.log(nums);

nums.forEach(ele =>{
    console.log(ele);
})

console.log(nums.has("Shreyansh"));
console.log(nums.has(5));