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

const marvel_heroes = ['spiderman', 'ironman', 'captain america'];
const dc_heroes = ['superman', 'batman', 'wonder women'];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // ['spiderman', 'ironman', 'captain america', ['superman', 'batman', 'wonder women']]
console.log(marvel_heroes[3][1]); // batman

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // ['spiderman', 'ironman', 'captain america', 'superman', 'batman', 'wonder women']

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // using spread 
console.log(all_new_heroes);

const list = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const newList = list.flat(Infinity);
console.log(newList);

console.log(Array.isArray("Javascript")); // returns a boolean value
console.log(Array.from("JavaScript")); // returns an array associated string character
console.log(Array.from({language: 'Javascript'})); // []; interesting part

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
