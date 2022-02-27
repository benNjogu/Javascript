//Challenge 10
//Show stars


//MY ANSWER
showStars(15);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}


//TUTORS ANSWER


/*
CONCLUSION ==> I got it!
*/
