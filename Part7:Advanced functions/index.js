
//Function declaration
function walk() {
    console.log('walk');
}

//Anonymous Function Expression
let run = function () {
    console.log('run');
};

let move = run;
run();
move();

//Named Function Expression
let running = function running() {
    console.log('run');
};

//Hoisting 
//Moving function declarations to the top of the file
//You cannot call an anonymous function before its initialization
