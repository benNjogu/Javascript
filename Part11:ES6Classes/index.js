
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();
/**
 * The above will give undefined as output.
 * NB:by default the body of our classes are defined 
 * in strict mode!!
 */