/**
 * Challenge 6
 * 
 */

const numbers = [1, 2, 3, 3, 7];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.lenght === 0) return undefined;

    let max = array[0];
    for (let element of array)
        if (element > max)
            max = element;

    return max;
}


