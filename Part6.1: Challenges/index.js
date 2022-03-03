/**
 * Challenge 1
 * Write a function that takes two parameters min and max
 * and returns an array between min and max inclusive
 * as output
 */

const numbers = arrayFromRange(1, 4);
console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);

    return output;
}

//Output => [1, 2, 3, 4]
