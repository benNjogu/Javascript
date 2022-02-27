//Challenge 4


//MY ANSWER
checkOddOrEven(10);

function checkOddOrEven(limit) {
    let i = 0;
    while (i <= limit) {

        if (i % 2 === 0)
            console.log(i + ' EVEN');
        else
            console.log(i + ' ODD')

        i++;
    }
}
console.log('-------------------')
//TUTORS ANSWER
//===> Used a for loop
showNumbers(10)
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        //if (i % 2 === 0) console.log(i + ' EVEN');
        //else console.log(i + ' ODD')
        const message = (i % 2 === 0) ? ' EVEN' : ' ODD';
        console.log(i, message);
    }
}

/*
CONCLUSION ==> I got it!
*/
