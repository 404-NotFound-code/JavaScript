"use strict"; // treat all js code as newer version

// alert(3+3); // we are using nodejs, not browser

let fullname = "Proshanta Pal";
let age = 19;
let isLoggedIn = true;

// primitive data types (call by value) <- stack memory
// number = 2 to the power 53
// bigint 
// string = ""/'' 
// boolean = true/false 
// null = stadalone value 
// undefined 
// symbol = unique

console.log(typeof fullname);
console.log(typeof age);
console.log(typeof(isLoggedIn));
console.log(typeof undefined); // undefined
console.log(typeof null); // object

const bigNum = 223344585949334545n;
console.log(typeof bigNum); // bigint

const id = Symbol('123');
const newId = Symbol('123');
console.log(id);
console.log(newId);
console.log(id === newId); // false

// reference(non-primitive) data types <- heap memory
// array
// objects
// functions

const avatar = ["krishna", "shri ram", "kalki"];
console.log(typeof avatar);

let info = {
    name: "Proshanta",
    age: 19,
    id: 1234567,
}
console.log(typeof info);

const f = function(){
    console.log("Hello");
}
console.log(typeof f);

