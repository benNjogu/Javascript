/**
 * Challenge 5
 * Count occurrences of an element in an array
 */

const numbers = [1, 2, 3, 3, 5];

const count = countOccurrences(numbers, 3);

console.log(count);

function countOccurrences(array, searchElement) {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
        if (array[i] === searchElement)
            sum++;

    return sum;
}


