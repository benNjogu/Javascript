
function Circle(radius) {
    //instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

//Prototype members
//This writes the draw method on the prototype
Circle.prototype.draw = function () {
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);

Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}
