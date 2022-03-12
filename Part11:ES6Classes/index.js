
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //instance method
    draw() {

    }

    //static method
    /**
     * Used to create utility functions that are not tied to 
     * a particular object.
     */
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

