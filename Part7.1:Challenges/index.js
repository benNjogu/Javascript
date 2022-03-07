
/**
 * Challenge1 = sum of arguments
 * Write a function that takes arguments and returns their sum
 */

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));

