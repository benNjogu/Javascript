/**
 * Challenge 2
 * Create a method that works like include function
 */

const array = [1, 2, 3, 4, 5];

let isIn = myIncludes(array, 4);

console.log(isIn);

function myIncludes([], number) {
    for (let num of array)
        if (num === number)
            return true;

    return false;
}


