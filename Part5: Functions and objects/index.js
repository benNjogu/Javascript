
//String primitive
const message = ' This is my first message \nto the people of Murang\'a';

//using template literals to clean code
const another = `This is my 
first message in murang'a`;
//The above uses the Template literals (``)
console.log(another);

console.log('-------------');

const another1 =
    `Hi John 

Thank you for joining my mailing list.

regards,
Ben.`

console.log(another1);

console.log('-------------');
//To add a variable dynamically, you can use expression language
let herName = 'Furaha';
const another2 =
    `Hi ${herName},

Thank you for joining my mailing list.

regards,
Ben.`

console.log(another2);

