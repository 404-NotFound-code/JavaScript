const code = ['python', 'javascript', 'java', 'cpp'];

const values = code.forEach( (item) => {
    // console.log(item);
    return item; // undefined 
})
console.log(values); // forEach loop return nothing = undefined 

// filter
const nums = [1,2,3,4,5,6,7,8,9,10];
// const newnums = nums.filter((num) => num > 4);
// console.log(newnums); // [5,6,7,8,9,10]

// const newnums = nums.filter((num) => {
//     num > 4;
// });
// console.log(newnums); // []

// const newnums = nums.filter((num) => {
//     return num > 4;
// });
// console.log(newnums); // [5,6,7,8,9,10]

const newnums = [];
nums.forEach((num) => {
    if (num > 4){
        newnums.push(num)
    }
})
console.log(newnums); // [5,6,7,8,9,10]

// map 
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const updNums = myNums.map((num) => num + 10);
// console.log(updNums); // [11,12,13,14,15,16,17,18,19,20]

// chaining 
const updNums = myNums.map((num) => num*10).map((num) => num +1).filter((num) => num >= 40);
console.log(updNums); // [41,52,61,71,81,91,101]

// reduce 
const numbers = [1,2,3];

// const total = numbers.reduce(function(acc, curVal){
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal;
// }, 0);
// console.log(total); // 6

const total = numbers.reduce((acc, curVal) => acc+curVal, 0);
console.log(total); // 6

const shoppingCart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'py course',
        price: 1499
    },
    {
        itemName: 'devOps course',
        price: 5000
    },
];

const pay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pay); 