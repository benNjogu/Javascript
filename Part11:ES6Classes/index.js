

const _radius = Symbol();
class Circle {
    constructor(radius) {
        //this.radius = radius;
        //this['radius'] = radius;
        /**The above lines are the same */
        this[_radius] = radius;
    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);