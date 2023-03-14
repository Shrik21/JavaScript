
let map = new Map();

map.set(1,"red");
map.set(2,"Orange");
map.set(3,"yellow");
map.set(4,"pink");

console.log(map.keys());

console.log(map.has(3));

console.log(map.get(3));


for(let [k,v] of map){
    console.log(k," : ",v);
}

console.log("************");

map.forEach((v,k)=>{
    console.log(k," : ",v);
})