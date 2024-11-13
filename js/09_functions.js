// function add(a, b){
//     console.log(a + b);
// }
// add(3, 4); // 7
// add(3, '4'); // 34
// add(3, 'a'); // 3a 
// add(3, null); // 3
// const a = add(3, 5); // 8
// console.log(a); // undefined

function add(a, b){
    let s = a + b;
    return s; // same as, return a + b
    // console.log('h'); // can't execute after return keyword 
    
}

const s = add(3, 5); 
console.log(s); // 8

function loginUserName(username){ // avoiding undefined we can write default values like username = 'sam'
    if (!username){ // username === undefined
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`;
}
loginUserName('proshanta'); // output nothing
console.log(loginUserName('proshanta')); // proshanta just logged in 
console.log(loginUserName('')); // just logged in 
// console.log(loginUserName()); // undefined just logged in
console.log(loginUserName()); // Please enter a username

function calculateCartPrice(val1, val2, ...num1){ // rest / spread operator 
    return num1;
    // return `${val1}, ${val2}, ${num1}`
}
// console.log(calculateCartPrice(200, 300, 500, 2000)); // returns an array
console.log(calculateCartPrice(200, 300, 500, 20000)); // val1 = 200, val2 = 300, num1 = [500, 20000]

// function with objects
const user = {
    username: 'js',
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

handleObject(user); // Username is js and price is 999 or undefined(when object key is not valid)
handleObject({
    username: 'python',
    price: 399 
}) // Username is python and price is 399 

// function with arrays
const newArr = [100, 200, 300, 400, 500];
function returnThirdValue(getArr){
    return getArr[2]
}
console.log(returnThirdValue(newArr)); // 300
console.log(returnThirdValue([1000, 20000])); // undefined 
console.log(returnThirdValue([299, 344, 511, 233])); // 511

