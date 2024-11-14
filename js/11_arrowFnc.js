const user = {
    username: 'Proshanta',
    price: 999,
    writeMsg: function(){
        console.log(`${this.username}, welcome to the website`); // this = refer current context
        console.log(this);
    }
}
user.writeMsg(); // Proshanta, welcome to the website
user.username = 'Sam';
user.writeMsg(); // Sam, welcome to the website 
console.log(this); // {}, for nodejs

// function any(){
//     let username = 'hello';
//     console.log(this.username); // undefined  
// }
// any();

// same as any()
// const any = function(){
//     let username = 'hello';
//     console.log(this.username); // undefined
// }
// any();

// arrow function 
const any = () => {
    let username = 'hello';
    console.log(this.username); // undefined
    console.log(this); // {}
}
any();

// Explicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4)); // 7

// Implicit return 
// const addTwo = (num1, num2) => num1 + num2; // (num1 + num2); parenthesis no return
// console.log(addTwo(3, 4)); // 7

const addTwo = (num1, num2) => ({username: 'javascript'});
console.log(addTwo(3, 4)); // {username: 'javascript'}

// Immediately Invoked Function Expressions (IIFE)
(function db1(){
    // named IIFE
    console.log(`DB connected`);
})(); // this semicolon is important

(function db2(){
    console.log(`DB connected 2`); 
})(); // this semicolon is important

((name) => {
    console.log(`Hello world ${name}`);
})('sql'); // this semicolon is important