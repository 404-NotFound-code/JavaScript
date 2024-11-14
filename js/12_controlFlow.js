console.log(false == 0); // true
console.log(false == ''); // true
console.log('' == 0); // true

const score = 99;
if (score >= 90){
    let a = 'greatly';
    console.log(`User's fly ${a}`);
}
// console.log(`User's fly ${a}`); // error; because of scopes

const balance = 1000;
if (balance > 500) console.log('Rich');
if (balance > 500) console.log('Rich'), console.log('Rich');

// switch case
const month = 3; // 'jan'
switch (month) {
    case 1: // 1 = 'jan'
        console.log('Jan');
        break;
    case 2: // 2 = 'feb'
        console.log('Feb');
        break;
    case 3: // 3 = 'mar'
        console.log('Mar');
        break;
    default:
        console.log('Nothing');
        break;
}

// falsy values -> false, 0, -0, BigInt 0n, null, "", null, undefined, NaN
// truthy values -> "0", "false", " ", [], {}, function(){}

const emptyArr = [];
if (emptyArr.length === 0){
    console.log('Empty array');    
} 

const emptyObj = {};
if (Object.keys(emptyObj).length === 0){
    console.log('Empty object');
    
}

// Nullish Coalesing Operator (??): null, undefined
let val1 = 5 ?? 10;
console.log(val1); // 5
val1 = null ?? 10;
console.log(val1); // 10
val1 = undefined ?? 13;
console.log(val1); // 13
val1 = null ?? 10 ?? 20;
console.log(val1); // 10

// Ternary operator: condition ? true : false
const teaPrice = 100;
teaPrice <= 80 ? console.log('Less than 80'): console.log('More than 80'); // More than 80

