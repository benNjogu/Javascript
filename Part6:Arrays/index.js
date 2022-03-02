
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find(course => course.name === 'a');
//The above returns the actual object
console.log(course);

console.log('------------------------')

const course2 = courses.findIndex(course => course.name === 'b');
//The above returns index
console.log(course2);

