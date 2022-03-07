
/**
 * Challenge1 = sum of arguments
 * Write a function that takes arguments and returns their sum
 */

function sum(...items) {
    return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

