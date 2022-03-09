
//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle = new Circle(10);

//soln 1: getting all keys and objects
for (let key in circle)
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);


//soln 1: getting all keys and objects
console.log(Object.keys(circle));

//Equivalent of contains in Java
if ('radius' in circle)
    console.log('Circle has a radius');
