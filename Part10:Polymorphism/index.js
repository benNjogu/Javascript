
function Shape() {

}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

//creates the prototypical inheritance
Circle.prototype = Object.create(Shape.prototype);
//assign constructor to circle
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
