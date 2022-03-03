/**
 * Challenge 5
 * Count occurrences of an element in an array
 */

const numbers = [1, 2, 3, 3, 5];

const count = countOccurrences(numbers, 3);

console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}


