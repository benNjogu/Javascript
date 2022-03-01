
//String primitive
const message = ' This is my first message \nto the people of Murang\'a';

console.log(message.length);
console.log(message[5]);

//String object
const another = new String('hi');

message[7]
console.log(message.includes('first'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));//case sensitive
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));//does not modify the original string
console.log(message.toUpperCase());
console.log(message.trim());//removes white spaces in the begining and end of sentence
console.log(message.trimLeft());
console.log(message.split(' '));


