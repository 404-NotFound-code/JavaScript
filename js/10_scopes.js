// // Global scope
// // let a = 10; // block scope
// // const b = 20; // block scope
// var c = 300; // global scope

// // console.log(a); // 10
// // console.log(b); // 20 
// // console.log(c); // 30

// if (true){ // Local scope
//     let a = 100; // block scope
//     const b = 20; // block scope
//     var c = 30; 
// }

// // console.log(a); // error
// // console.log(b); // error
// console.log(c); // 30

// scope level 
// function one(){
//     const username = 'hello';

//     function two(){
//         const website = 'youtube';
//         console.log(username); // hello 
//     }
//     // console.log(website); // error

//     two();
// }
// one();

if (true){
    const username = 'hi';
    if (username === 'hi'){
        const website = ' google';
        console.log(username + website); // hi google
    }
    // console.log(website); // error
    
}
// console.log(username); // error 


console.log(addOne(5)); // 6
function addOne(num){
    return num + 1;
}
addOne(5); // output nothing

// hoisting
// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}
// addTwo(5); 