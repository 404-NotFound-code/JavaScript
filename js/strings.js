const title = "JavaScript";
const year = 2025;

console.log(title + " is my favourite language in " + year);
console.log(title, "is my favourite language in", year);
console.log(`${title} is my favourite language in ${year}`); // string interpolation

console.log(typeof title); // string

const username = new String("helloworld25");
console.log(username[0]); // h
console.log(username.__proto__); // {}
console.log(username.length);
console.log(username.charAt(2));
console.log(username.indexOf("t")); 
console.log(username.substring(0, 4));
console.log(username.slice(0, 6)); // neg index possible
console.log(username.replace("hello", "hi"));
console.log(username.includes("hello")); // true

const url = "   hello@world.com.bd           ";
console.log(url.trim()); // remove whitespace from before and after
console.log(url.split(".")); // converts string to array

