const title = "JavaScript";
const year = 2025;

console.log(title + " is my favourite language in " + year);
console.log(title, "is my favourite language in", year);
console.log(`${title} is my favourite language in ${year}`); // string interpolation

console.log(typeof title); // string

const username = new String("helloworld25");
console.log(username[0]); // h
console.log(username.__proto__); // {}
console.log(username.length); // 12
console.log(username.charAt(2)); // l
console.log(username.indexOf("t")); // -1 = not found
console.log(username.substring(0, 4)); 
console.log(username.slice(0, 6)); // neg index possible
console.log(username.replace("hello", "hi"));
console.log(username.includes("hello")); // true; if not found it returns false

const url = "   hello@world.com.bd           ";
console.log(url.trim()); // remove whitespace from before and after
console.log(url.split(".")); // converts string to array

