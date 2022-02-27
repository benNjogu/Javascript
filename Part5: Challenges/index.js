//Challenge 7


//MY ANSWER

console.log('-------------------')
//TUTORS ANSWER
const movie = {
    title: 'The alchemist',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Ben'
};

showProperties(movie);

function showProperties(obj) {
    for (let keyValue in obj) {
        if (typeof obj[keyValue] === 'string') {
            console.log(keyValue, obj[keyValue]);
        }
    }
}

/*
CONCLUSION ==> I got it!
*/
