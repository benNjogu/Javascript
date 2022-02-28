
//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//Factory function
const myCircle = createCircle(4);
console.log(myCircle);

function createCircle(radius) {
    return {
        //in modern js if key and value are same,
        // remove the key! e.g radius: radius below
        radius,
        draw() {
            console.log('draw')
        }
    };
}

//Constructor function
const circle = new Circle(7);
console.log(circle);

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
