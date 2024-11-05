let score = "33";
console.log(typeof score);

let numScore = Number(score);
console.log(typeof numScore);
console.log(numScore); 

let newScore = "33abc";
let updatedScore = Number(newScore);
console.log(typeof updatedScore);
console.log(updatedScore); // NaN = Not a Number = undefined = string

let zero = null;
let updatedZero = Number(zero);
console.log(typeof updatedZero);
console.log(updatedZero); // 0 = false ; For true = 1

let isLoggedIn = 1; // 0 = false, "" = false, "proshanta" = true

let bool = Boolean(isLoggedIn);
console.log(bool); 

let num = 33;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum); //string 


// ***************operations***************
let value = 13;
let negValue = -value;
console.log(negValue);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + "2" + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

// increment and decrement operators 


