// objects = constructor(singleton), literals (2 ways to declare)
// Object.create // constructor methods 

const mySym = Symbol("key1");

// object literals 
const user = {
    name: 'Proshanta',
    "full name": 'Proshanta Pal',
    // mySym: "mykey1", 
    [mySym]: "mykey1", // instead of using mySym: "mykey1"
    age: 19,
    location: 'Bangladesh',
    email: 'proshanta@google.com',
    isLoggedIn: false,
    lastLogIndays: ["Monday", "Tuesday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]); // cannot using dot method for this type of key-values
// console.log(user.mySym); // mykey1; for mySym: "mykey1"
// console.log(typeof user.mySym); // string; mySym: "mykey1",

const sym = user[mySym]; 
console.log(sym); // mykey1
console.log(typeof sym); // string 

user.email = "proshanta@apple.com";
// Object.freeze(user); 
user.email = "proshanta@microsoft.com";
console.log(user);

user.greeting = function(){
    console.log("Hello world");
}
console.log(user.greeting); // [Function (anoynymous)]; function reference
console.log(user.greeting());  // Hello world

user.greeting2 = function(){
    console.log(`Hello world, ${this.name}`); // Hello world, Proshanta
}
console.log(user.greeting2());

const tinderUser = new Object(); // same as const tinderUser = {}; singletone object
console.log(tinderUser); // {}
tinderUser.id = '123abc';
tinderUser.name = 'Hello';
tinderUser.isLogIn = false;
console.log(tinderUser);

const regularUser = {
    email: 'hello@gmail.com',
    fullname: {
        username: {
            firstname: 'Proshanta',
            lastname: 'Pal'
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.username.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = {obj1, obj2};
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2); // Object.assign(target, source)
console.log(obj4); 
const obj5 = {...obj1, ...obj2}; // using spread
console.log(obj5);

const users = [
    {
        id: 1,
        roll: 34
    },
    {
        id: 2,
        roll: 67
    },
    {
        id: 3,
        roll: 90
    }
]
console.log(users[1].id); // 2

console.log(tinderUser); // { id: '123abc', name: 'Hello', isLogIn: false }
console.log(Object.keys(tinderUser)); // returns an array; // [ 'id', 'name', 'isLogIn' ]
console.log(Object.values(tinderUser)); // returns an array; // [ '123abc', 'Hello', false ]
console.log(Object.entries(tinderUser)); // returns an array; // [ [ 'id', '123abc' ], [ 'name', 'Hello' ], [ 'isLogIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLogIn')); // true

// 
const course = {
    coursename: 'Ultimate js program',
    price: 999,
    courseInstructor: 'Hitesh'
}

// Distructuring 
// course.courseInstructor
const {courseInstructor: inst} = course;
// console.log(courseInstructor); // Hitesh
console.log(inst); // Hitesh

// In React
// const navbar = ({company}) =>{
//     // code...
// }
// navbar(company = 'pw')

// json api
// https://api.github.com/users/hiteshchoudhary
// google = random user me api 
// tools = json formatter 