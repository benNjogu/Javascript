
class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle');
    }
}

const c = new Circle();
