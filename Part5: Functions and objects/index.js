
//Object Oriented Programming
let radius = 1;
let x = 1;
let y = 1;
function draw();


//Putting the above values in an object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw')
    }
};

circle.draw();