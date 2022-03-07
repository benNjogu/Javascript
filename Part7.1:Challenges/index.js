
/**
 * Challenge2 = area of a circle
 * write a circle object where properties can be added 
 * but area is read only.
 * */

let circle = {
    radius: 1,

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

circle.radius = 7;
console.log(circle.area);
