
/**
 * ABSTRACTION:-
 * Hide the data and complexities and show only the essentials.
 * 
 * CLOSURE:-
 * Determines what variables are accessible to an inner function.
 */

//constructor function
function Circle(radius) {

    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = function () {
        return defaultLocation;
    };

    this.draw = function () {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.x)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    });

}

const circle = new Circle(10);
circle.getDefaultLocation();//accessing using a function
circle.defaultLocation = 1;
circle.draw();
