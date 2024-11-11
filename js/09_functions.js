// function add(a, b){
//     console.log(a + b);
// }
add(3, 4); // 7
add(3, '4'); // 34
add(3, 'a'); // 3a 
add(3, null); // 3
const a = add(3, 5); // 8
console.log(a); // undefined

function add(a, b){
    let s = a + b;
    return s;
    // console.log('h'); // can't execute after return keyword 
    
}

const b = add(3, 5); //8
console.log(b); // 8

