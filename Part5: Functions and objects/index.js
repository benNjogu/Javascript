
const circle = {
    radius: 1
};

circle.color = 'Yellow';
circle.draw = function () { };

delete circle.color;
delete circle.draw;

//with circle as a constant, we cannot reasign
//it but we can change it by adding or removing properties.

console.log(circle);

//if we write
let x = {}
//js engine will translate this to
//let x = new Object();

//every object has a constructor property which references the function that was uses to create that object.
new String(); //'', "", ``
new Boolean(); //true, false
new Number();//1, 2, 3, ...
