
const first = [1, 2, 3];
const second = [4, 5, 6, 7];

//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

console.log('----------------');

/*const sliced = combined.slice(2, 4);
console.log(sliced);
const sliced2 = combined.slice(2);
console.log(sliced2);
const sliced3 = combined.slice();//gives a copy of the original array
console.log(sliced3);*/

const copy = [...combined];
console.log(copy);
