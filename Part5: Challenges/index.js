//Challenge 2
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a Number'

//MY ANSWER
const myOutput = fizzBuzz(15);
console.log(myOutput);

function fizzBuzz(myInput) {
    if (myInput % 3 === 0 && myInput % 5 === 0)
        return 'FizzBuzz';
    else if (myInput % 3 !== 0 && myInput % 5 !== 0)
        return myInput;
    else if (myInput % 3 === 0)
        return 'Fizz';
    else if (myInput % 5 === 0)
        return 'Buzz';
    else
        return 'Not a Number';
}


//TUTORS ANSWER
const output = fizzBuzz(false);
console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

/*
CONCLUSION ==> I was wrong! very wrong! but enlightened
*/
