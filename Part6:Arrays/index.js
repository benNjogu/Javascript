
const numbers = [-1, -2, 3, -4];

const allPositive = numbers.every(function (value) {
    return value >= 0;
});
/**
 * @The above method returns true if allPositive 
 * and false if any is negative.
 */

const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});
/**
 * @The above checks to see if at least one 
 * of the elements is positive in which it returns true
 */
console.log(atLeastOnePositive);
