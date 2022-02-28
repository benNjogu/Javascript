
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);//10

console.log('-------------------');

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);//11

//<TAKE AWAY>
//Primitives are copied by their value
//Objects are copied by their reference
