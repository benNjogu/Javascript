/**
 * Challenge 4
 * Move elements of an array
 */

const array = [1, 2, 3, 4, 5];

const output = move(array, 0, -1);

console.log(output);

function move(array, index, offset) {

    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1);
    output.splice(index + offset, 0, element[0]);

    return output;
}


