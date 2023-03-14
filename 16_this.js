/*
link -> https://www.w3schools.com/js/js_this.asp


What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

let laptop = {

    brand : 'Asus',
    cpu : 'ryzen 7',
    ram : '16 GB',

    greet : function(){
        let cpu = 'i7'

        console.log(cpu);

        // this always represent current object
        console.log(this.cpu);
        console.log(laptop.cpu);
    }

}

laptop.greet();


     



