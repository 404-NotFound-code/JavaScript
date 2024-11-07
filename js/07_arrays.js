const arr = [1,2,3,4.5,true,"hello"];
console.log(arr);
console.log(arr[1]); // 2

const arr2 = new Array(1,2,3,4.5,false,"world");
console.log(arr2[4]);

// array methods 
arr.push(123);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("world");
console.log(arr); 
arr.shift();
console.log(arr);
console.log(arr.includes(9)); // returns boolean value
console.log(arr.indexOf(1)); // ???

const newArr = arr2.join();
console.log(arr2);
console.log(newArr);
console.log(typeof newArr); // string

// slice and splice 
const myArr = [0,1,2,3,4,5];
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr); 

const myn2 = myArr.splice(1, 3); // splice change original array
console.log("C ", myArr);
console.log(myn2);
