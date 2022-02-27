
//<Falsy>
//undefined 
//null
//0
//false
//''
//NaN

//<Truthy>
//anything that is not falsy

console.log(false || true);
console.log(false || 'Ben');
console.log(false ||  1);
//short-circuiting
console.log(false || 1 || 2);

console.log("--------------------");

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
