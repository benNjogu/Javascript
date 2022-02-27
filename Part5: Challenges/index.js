//Challenge 1
//Write a function that returns two numbers 
//and returns the maximum of the two.

//MY ANSWER
function maxNum(num1, num2){
    if(num1 > num2)
        return num1 + ' is the greatest!';
    else if(num1 < num2)
        return num2 + ' is the greatest!';
    else return num1 + ' and ' + num2 + ' are equal.';
}

let returnedNumber = maxNum(3, 2);
console.log(returnedNumber);


//TUTORS ANSWER
let number = max(3, 5);
console.log(number);

function max(a, b){
    return (a > b) ? a : b;
}

/*
CONCLUSION ==> The tutors code is cleaner!
*/
