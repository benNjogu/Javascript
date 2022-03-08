
/**
 * VALUES TYPES:- numbers, string, boolean, symbol, undefined, null
 * REFERENCES TYPES:- object, functions, arrays
 */

let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x.value);//ans=20
console.log(y.value);//ans=20
//in this case the variables are storing the references to values
