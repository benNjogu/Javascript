
let x = 10;
let y = x;

x = 20;
//from the above
//x=20 and y=10

let x = { value: 10 };
let y = x;

x.value = 20;
//from the above
//x=20 and y=20

//<TAKE AWAY>
//Primitives are copied by their value
//Objects are copied by their reference
