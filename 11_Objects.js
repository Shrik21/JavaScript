/**
 * linl -> https://www.w3schools.com/js/js_object_definition.asp
 * 
 * A JavaScript object is a collection of named values
 * 
 * 
 */

let object = {

name: 'Shreyansh',
company : 'EXL'


}

console.log(object.name);

console.log(object['company']);


// Complex Object -> This mean object have another objects as a property

let complexObject = {

    name: {
        firstName : 'Shreyansh',
        lastName : 'Kumar' 
    },
    company : 'EXL'
    }

    console.log(complexObject.name.firstName?.length);


    // In below example we will see how can we delete one of the properties from 
    // Object

    console.log(complexObject.name);
    delete complexObject.name.lastName
    console.log(complexObject.name);
    