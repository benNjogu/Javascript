
const numbers = [1, 2, 3];

//Soln 1
/*let sum = 0;
for (let n of numbers)
    sum += n;*/

//Soln 2
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);//0 is the initial of the accumulator

console.log(sum);
