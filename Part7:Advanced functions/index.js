
//The spread operator takes all the arguments and
//put them in an array
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

//NB: Rest parameter should be the last parameter in a function
//Otherwise, error!!