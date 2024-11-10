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
console.log(user.greeting); // [Function (anoynymous)]
console.log(user.greeting());  // Hello world

user.greeting2 = function(){
    console.log(`Hello world, ${this.name}`);
}
console.log(user.greeting2());

