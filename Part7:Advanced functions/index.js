
//The spread operator takes all the arguments and
//put them in an array
function sum(...args) {
    //console.log(args);
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5));