
//1 = 00000001
//2 = 00000010

//3 = 00000011
//0 = 00000000

console.log(1 | 2);//3
console.log(1 & 2);//0
console.log('------------------')

//Read, write and execute
//00000100 ->for read permission only
//00000010 ->for write permissions
//00000001 ->for execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message);
