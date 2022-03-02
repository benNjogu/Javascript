
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));//-1
console.log(numbers.lastIndexOf(1));//3
console.log('-------------------');
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 1));
console.log('-------------------');
//check if a certain number exists
console.log(numbers.indexOf(1) === -1);
console.log(numbers.includes(1));

