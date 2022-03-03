
const numbers = [1, -2, 3, 4];

const filtered = numbers.filter(value => value >= 0);

const items = filtered.map(n => ({ value: n }));
/**
 * @Use brackets () around an object when 
 * returning it using the arrow function.
 */

console.log(items);
