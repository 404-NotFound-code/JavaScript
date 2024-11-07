let score = "33";
console.log(typeof score); // string

let numScore = Number(score);
console.log(typeof numScore); // number
console.log(numScore); // 33

let newScore = "33abc";
let updatedScore = Number(newScore);
console.log(typeof updatedScore); // number
console.log(updatedScore); // NaN = Not a Number = undefined = string

let zero = null;
let updatedZero = Number(zero);
console.log(typeof updatedZero); // number
console.log(updatedZero); // 0 = false ; For true = 1

let isLoggedIn = 1; // 0 = false, "" = false, "proshanta" = true

let bool = Boolean(isLoggedIn);
console.log(bool); // true

let num = 33;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum); //string 

// ***************operations***************
let value = 13;
let negValue = -value;
console.log(negValue); // -13

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + "2" + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

// increment and decrement operators 
let n1 = 10;
let inc1 = ++n1; // update first
console.log(inc1); // 11

let n2 = 20;
let inc2 = n2++; // update last
console.log(inc2); // 20
console.log(n2); // 21

