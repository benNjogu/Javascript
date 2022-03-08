
//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };

}

const circle = createCircle(1);
//circle.draw();

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);
/**
 * with the new operator above, 
 * 1. A new object is created
 * 2. It sets this to point to that new object
 * 3. It will return that object from the function
 * NB we dont have a return statement in the function
 */

