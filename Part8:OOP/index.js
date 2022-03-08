
//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

Circle.call({}, 1);
Circle.apply({}, [1]);

const Circle1 = new Function('radius',
    `this.radius = radius;
this.draw = function () {
    console.log('draw');
}`
);

const circle = new Circle1(1);
console.log(circle);

const another = new Circle(1);

console.log(Circle.name);
