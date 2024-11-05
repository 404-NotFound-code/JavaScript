// stack memory
let myChannel = "Proshanta";
let newChannel = myChannel; // (get a copy)
newChannel = "hello";

console.log(myChannel);
console.log(newChannel);

// heap memory
let userOne = {
    email: "paul@proshanta.com",
    phone: 123,
}

let userTwo = userOne; // (get reference)""
userTwo.email = "hello@world.com";

console.log(userOne.email);
console.log(userTwo.email);
