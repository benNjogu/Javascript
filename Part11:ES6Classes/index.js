

const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        //this.radius = radius;
        //this['radius'] = radius;
        /**The above lines are the same */
        this[_radius] = radius;
    }

    //computed property names
    [_draw]() {

    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);