// create object literal 
// let person = {
//     firstName: 'Proshanta',
//     lastName: 'Pal',
//     age: 19,
//     city: 'Chattgram',
//     isBangladeshi: true,
//     getName: ()=>{ 
//         return `My name is ${person.firstName} ${person.lastName}`
//     }         
// }   

// console.log(person);
// console.log(person.firstName);

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
// class Person{
//     firstName = 'Proshanta'
//     lastName = 'Pal'
//     age = 19
//     city = 'Chattogram'
//     isBangladeshi = true
//     getName(){
//         return `My name is ${this.firstName} ${this.lastName}`;
//     }
// }

// let personObj = new Person();
// console.log(personObj);  
// console.log(personObj.getName());     

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
// class Person{
//     constructor(){
//         console.log('I am a Constructor method');
//     }
// }
// let PersonObj = new Person();

// Constructor parameter 
// class Person{
//     constructor(num1, num2){
//         let sum = num1 + num2;
//         console.log(sum);
//     }
// }
// let PersonObj = new Person(10, 20); 

// Change class properties by constructor
// class Person{
//     num1 = 10;
//     num2 = 20;

//     constructor(a, b){
//         this.num1 = a;
//         this.num2 = b;
//     }

//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }
// let PersonObj = new Person(400, 500);
// console.log(PersonObj.addTwo()); 

// Getter and setter(specialized method)
// class Product{
//     set setPrice(value){ // Setter = set a property with value
//         this.price = value;
//     }

//     get getPrice(){ // Getter = get the setter property value
//         return this.price;
//     }
// }

// let productObj = new Product();
// console.log(productObj); // Product {}

// productObj.setPrice = 100;
// console.log(productObj); // Product { price: 100 }
// console.log(productObj.getPrice); // 100

// static keyword (access property without creating an object)
// We use static keyword for shared properties, utility functions, memory efficiency & performance
// class Person{
//     static firstName = 'John'
//     static lastName = 'Smith'
//     static getName(){
//         return `My name is ${this.firstName} ${this.lastName}`;
//     }
// }
// Without static method
// let personObj = new Person();
// console.log(personObj.getName()); // My name is John Smith

// With static method
// console.log(Person.firstName); // John
// console.log(Person.lastName); // Smith
// console.log(Person.getName()); // My name is John Smith

// Inheritence
// class Father{
//     num1 = 10;
//     num2 = 20;
//     addNum(){
//         let sum = this.num1 + this.num2;
//         console.log(sum);
//     }
// }

// class Son extends Father{

// }

// let sonObj = new Son();
// console.log(sonObj); // Son { num1: 10, num2: 20 }
// console.log(sonObj.num1); // 10
// sonObj.addNum(); // 30

// let FatherObj = new Father();
// console.log(FatherObj); 
// console.log(FatherObj.num1); // 10
// FatherObj.addNum(); // 30 

// Inheritance constructor
 
// 1. Constructor inside only parent class
// 2. Constructor inside only parent class pass parameters
// class Father{
//     constructor(msg){
//         console.log(msg);
        
//     }
// }

// class Son extends Father{

// }
// new Father(); // I am a constructor of Father class
// new Son(); // I am a constructor of Father class
// new Father('This is constructor parameter from Father'); // This is constructor parameter from Father
// new Son('This is constructor parameter from Son'); // This is constructor parameter from Son

// 3. Constructor inside only child class
// 4. Constructor inside only child class pass parameters
// class Father{

// }
// class Son extends Father{
//     constructor(msg){
//         super()
//         // console.log('I am a constructor of Son class');
//         console.log(msg);
//     }
// }
// new Father(); // error
// new Son(); // I am a constructor of Son class 
// new Son('This is constructor parameter from Son class'); 

// 5. Constructor inside both parent and child class
// 6. Constructor inside only both parent and child class
class Father{
    constructor(msgFather){
        console.log(msgFather);
    }
}
class Son extends Father{
    constructor(msgSon){
        super();
        console.log(msgSon);
    }
}
// new Father(); // I am Father constructor
// new Son(); /* I am Father constructor \nI am a Son constructor */
new Father('msg parameter form Father constructor'); // msg parameter form Father constructor
new Son('msg parameter form Son constructor'); // undefined \nmsg parameter form Son constructor

