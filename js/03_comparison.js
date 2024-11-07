console.log(2 > 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true
console.log(null); // null 

console.log(undefined == 0); // false
console.log(undefined > 0); // false 
console.log(undefined < 0); // false
console.log(undefined != 0); // true

console.log("2" == 2); // true; checks only values
console.log("2" === 2); // false; checks values with types
