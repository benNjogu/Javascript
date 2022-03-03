/**
 * Challenge 6
 * Get max number in an array
 */

const numbers = [1, 2, 3, 3, 7];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.lenght === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}

