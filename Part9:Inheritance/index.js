
function Circle(radius) {
    //instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

//Prototype members
Circle.prototype.draw = function () {
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);

//Only returns instant members
console.log(Object.keys(c1));

//Returns all members(instant + prototype)
for (let key in c1) console.log(key);
