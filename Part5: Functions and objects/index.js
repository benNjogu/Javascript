
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};

//The old way to clone
for (let key in circle)
    another[key] = circle[key];

console.log(another);

console.log('----------------------');

//Another way to clone
//This can be used to combine multiple objects into a single object
const another1 = Object.assign({
    color: 'yellow'
}, circle);
console.log(another1);

console.log('----------------------');

//Yet another way
const another2 = { ...circle };
console.log(another2);
