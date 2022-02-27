//Challenge 8
//Multiples of 3 and 5 between 0 and 10
//Multiples of 3 => 3, 6, 9, 12, 15, 18
//Multiples of 5 => 5, 10, 15, 20

//MY ANSWER
console.log(sum(20));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if ((i % 3 == 0) || (i % 5 == 0))
            sum += i;

    for (let i = 0; i <= limit; i++)
        if ((i % 3 == 0) && (i % 5 == 0))
            sum += i;

    return sum;
}


console.log('-------------------')
//TUTORS ANSWER


/*
CONCLUSION ==> I got it!
*/
