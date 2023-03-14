/* Link -> https://www.w3schools.com/js/js_object_methods.asp

JavaScript Methods
JavaScript methods are actions that can be performed on objects.

A JavaScript method is a property containing a function definition.

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
Methods are functions stored as object properties.


*/

let laptop = {

    brand : 'Asus',
    cpu : 'ryzen 7',
    ram : '16 GB',

    greet : function(){
        console.log('Hello world');
    }

}

laptop.greet();