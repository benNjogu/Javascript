
/**
 * ABSTRACTION:-
 * Hide the data and complexities and show only the essentials.
 * 
 * CLOSURE:-
 * Determines what variables are accessible to an inner function.
 */

//constructor function
function Circle(radius) {

    let color = 'red';

    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.computeOptimumLocation = function () {

    };

    this.draw = function () {
        computeOptimumLocation();

        console.log('draw');
    };

}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
