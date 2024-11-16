// nested for loops 
// for (let i = 0; i < 11; i++){
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j < 11; j++){
//         console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
//     }
// }

// print tables 
// for (let i = 1; i < 11; i++){
//     for (let j = 1; j < 11; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let myArr = ['hello', 'world', 'everyone'];
// console.log(myArr.length); // 3
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// break
// for (let i = 1; i <= 10; i++){
//     if (i == 5){
//         console.log(`Detected ${i}`);
//         break;
//     }
//     console.log(`Value is ${i}`);
// }

// continue
// for (let i = 1; i <= 10; i++){
//     if (i == 5){
//         console.log(`Detected ${i}`);
//         continue;
//     }
//     console.log(`Value is ${i}`);
// }

// while loop
// let index = 0;
// while (index <= 10){
//     console.log(`Value of index is: ${index}`);
//     index += 2;
// }

// do while loop
let score = 1
do{
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);

// for of loop
const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

// for in loop
const greetings = 'Hello World!';
for (const char of greetings){
    console.log(char);
}

// maps 
const map = new Map();
map.set('BD', 'Bangladesh');
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('BD', 'Bangladesh'); // only unique values 

console.log(map);
