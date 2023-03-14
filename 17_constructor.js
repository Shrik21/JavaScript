/*

link -> https://www.w3schools.com/js/js_object_constructors.asp

In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.


*/

function User(userName,unit){
     this.userName = userName;
     this.unit = unit;

     this.work  =function (){
        console.log('Method in  function');
    }

    // if we return anything it will jsur skip it
    return 89;
}

let user1 = new User('Shreyansh','GPP');
let user2 = new User('Golu','CPP');

user1.userName = "Ravi";

console.log(user1,user2);


