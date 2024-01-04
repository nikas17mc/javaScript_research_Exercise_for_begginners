// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");

console.log(typeof age);       // Output: string
age = Number(age);           // Convert String to Number
console.log(typeof age);      // Output: number
age += 1;

console.log("Happy Birthday! You are", age, "years old");
*/

let x;
let y;
let z;

x = Number("3.14");
// Fun Fact " x = Number("pizza") it will make a output of 'NaN' "
y = String(3.14); 
z = Boolean(""); // # Output: false
// z = Boolean("pizza") // # Output: true

console.log(x, typeof x); // # Output: 3.14 'number'
console.log(y, typeof y); // # Output: 3.14 'string'
console.log(z, typeof z); // # Output: false 'boolean'