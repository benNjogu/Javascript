

let numbers = [1, 2, 3, 4];

//Emptying an array
//Soln 1
numbers = [];

//Soln 2
numbers.length = 0;

//Soln 3
//Using the splice method
numbers.splice(0, numbers.length);

//Soln 4
//pop
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);

//Always go for soln 1 or 2(preferably)
