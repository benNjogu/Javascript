//Challenge 5
//Falsy
//undefined
//null
//''
//false
//0
//NaN


//MY ANSWER

console.log('-------------------')
//TUTORS ANSWER
const array = [null, 0, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

/*
CONCLUSION ==> I got it!
*/
