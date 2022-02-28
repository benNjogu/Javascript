
const circle1 = createCircle(4);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(8);
console.log(circle2);
circle2.draw();

//Factory function
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
