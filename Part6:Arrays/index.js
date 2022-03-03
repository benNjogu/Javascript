
const numbers = [1, -2, 3, 4];

const items = numbers
    .filter(value => value >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
/**
 * @Use brackets () around an object when 
 * returning it using the arrow function.
 */

console.log(items);
