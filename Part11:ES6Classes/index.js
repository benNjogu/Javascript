
sayHello();//can be called from here. its hoisting!!

sayGoodBye()//throws an error. the function is not hoisted!!

//Function Declaration
function sayHello() { }

//Function Expression
const sayGoodBye = function () { };

/**
 * NB: Function expressions are not hoisted.
 * same as regular variables e.g. let number = 1
 */
