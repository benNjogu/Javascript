//Challenge 9
//Grading system
//Calculate average first
//1-59 = F
//60-69 = D
//70-79 = C
//80-89 = B
//90-100 = A

//MY ANSWER
const marks = [80, 80, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {

    const average = calculateAverage(marks);

    if (average >= 90)
        return 'A';
    if (average >= 80)
        return 'B';
    if (average >= 70)
        return 'C';
    if (average >= 60)
        return 'D';

    return 'F';
}

function calculateAverage(marks) {
    let average = 0;
    for (let mark of marks)
        average += mark;

    return average / marks.length;
}

console.log('-------------------')
//TUTORS ANSWER


/*
CONCLUSION ==> I got it!
*/
