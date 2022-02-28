
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

console.log('----------------');

for (let key of Object.keys(circle))
    console.log(key);

console.log('----------------');

for (let entry of Object.entries(circle))
    console.log(entry);

console.log('----------------');

if ('radius' in circle) console.log('yes');
