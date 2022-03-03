/**
 * Challenge 7
 * Get all the movies in 2018 with rating > 4
 * Sort them by their rating 
 * Descending order
 * Pick their title
 */

const movies = [
    { title: 'a', year: 2022, rating: 4.5 },
    { title: 'b', year: 2022, rating: 4.7 },
    { title: 'c', year: 2022, rating: 3 },
    { title: 'd', year: 2021, rating: 4.5 }
];

const titles = movies
    .filter(m => m.year === 2022 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);
