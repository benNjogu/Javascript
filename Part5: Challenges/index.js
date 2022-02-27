//Challenge 3
//Speed limit = 70
//5 -> 1 point
//Math.floor(1.3) = 1
//12 points => suspended

//MY ANSWER
checkingSpeed(76)

function checkingSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= maxPoints)
        console.log('Licence suspended');
    else
        console.log('Points', points);

}


//TUTORS ANSWER


/*
CONCLUSION ==> I almost got it!
*/
