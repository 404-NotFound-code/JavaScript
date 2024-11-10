// create object literal 
let person = {
    firstName: 'Proshanta',
    lastName: 'Pal',
    age: 19,
    city: 'Chattgram',
    isBangladeshi: true,
    getName: ()=>{ 
        return `My name is ${person.firstName} ${person.lastName}`
    }         
}   

console.log(person);
console.log(person.firstName);

// creating instance of object
// let person = Object();
// person.firstName = 'Proshanta';
// person.lastName = 'Pal';
// person.age = 19;
// person.city = 'Chattgram';
// person.isBangladeshi = true;
// person.getName = ()=>{
//     return `My name is ${person.firstName} ${person.lastName}`
// }

// console.log(person);
// console.log(person.getName());

// By using an objeect constructor
// function person(){
//     this.firstName = 'Proshanta';
//     this.lastName = 'Pal';
//     this.age = 19;
//     this.city = 'Chattgram';
//     this.isBangladeshi = true;
//     this.getName = ()=>{
//          return `My name is ${this.firstName} ${this.lastName}`;
//     }
// }

// let personName = new person();

// console.log(personName);
// console.log(personName.getName());

// create a class 
class Person{
    firstName = 'Proshanta'
    lastName = 'Pal'
    age = 19
    city = 'Chattogram'
    isBangladeshi = true
    getName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

let personObj = new Person();
console.log(personObj);  
console.log(personObj.getName());     

// Redeclare class 
// A class can be declared once only. If we try to declare class more than one time it throws an error.

// class Person{
//     num1 = 10
//     num2 = 20
//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }

// class Person{
//     num1 = 100
//     num2 = 20
//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }
// let personObj = new Person();
// console.log(personObj); // Identifier 'Person' has already been declared

// Another way to define a class is by using a class expression
// let Person = class{
//     num1 = 100
//     num2 = 20
//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }
// let Person = class{
//     num1 = 100
//     num2 = 200
//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }
// let personObj = new Person();
// console.log(personObj); // Identifier 'Person' has already been declared

// class constructor 
/*
1. Constructor name should be constructor
2. Constructor execute automatically when object is created 
3. Constructor can take parameter 
4. Constructor method can't retun any result
*/
class Person{
    constructor(){
        console.log('I am a Constructor method');
    }
}
// let PersonObj = new Person();

// Constructor parameter 
class Person{
    constructor(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}
// let PersonObj = new Person(10, 20); 

// Change class properties by constructor
class Person{
    num1 = 10;
    num2 = 20;

    constructor(a, b){
        this.num1 = a;
        this.num2 = b;
    }

    addTwo(){
        return this.num1 + this.num2;
    }
}
let PersonObj = new Person(400, 500);
console.log(PersonObj.addTwo()); 


