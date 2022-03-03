/**
 * Challenge 2
 * Create a method that works like include function
 */

const array = [1, 2, 3, 4, 5];

let isIn = myIncludes(array, 8);

console.log(isIn);

function myIncludes([], number) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === number) {
            return true;
        }
        i++;
    }

    return false;
}


