
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
}

const c = new Circle(1);
c._radius

/**
 * The above approach is used by some developers
 * to mark variables as private.
 * NB:This is a terrible approach.
 * because it doesnt prevent external access.
 */