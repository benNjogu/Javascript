
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//internally the js engine represents the above as
const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }`)

const circle = new Circle1(1);
//the above line can be written as
Circle1.call({}, 1);
Circle1.apply({}, [1, 2, 3]);

circle.draw();

Circle.name//'Circle'
Circle.length//1 ---> this gives the number of arguments
Circle.constructor//ƒ Function() { [native code] }


//<TAKE-AWAY>
//Functions are objects