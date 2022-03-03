/**
 * Challenge 2
 * Take two arrays and from the first one remove elements 
 * in the second one.
 */

const numbers = [1, 2, 3, 4, 5];
const output = move(numbers, 0, 4);

console.log(output);

function move(arrays, index, offset) {

    if (offset >= arrays.length)
        return console.error('Invalid offset');

    let num;
    num = arrays[index];
    arrays[index] = arrays[offset];
    arrays[offset] = num;

    return arrays;
}


