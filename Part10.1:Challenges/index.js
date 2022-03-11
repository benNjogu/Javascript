
function mixin(target, ...sources) {//rest operator
    Object.assign(target, ...sources)//spread operator
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
}

const canSwim = {
    swim: function () {
        console.log('swimming');
    }
}

function Person() {

    this.isStudent = true;
    this.height = 560;

}

mixin(Person.prototype, canEat, canWalk, canSwim);

const person = new Person();
console.log(person);

function Omena() {

}

mixin(Omena.prototype, canEat, canSwim)

const omena = new Omena();
console.log(omena);

