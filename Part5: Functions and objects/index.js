
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
