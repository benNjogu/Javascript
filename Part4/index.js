
const person = {
    name: 'Ben',
    age: 30
};
   
//for in loop is best choice to iterate over properties(keys)
for(let key in person)
    console.log(key, person[key]);

//for of loop best choice to iterate over values 
const colors = ['red', 'green', 'blue'];
for(let color of colors)
    console.log(color);
    