
let person = { name: 'Ben' };

Object.defineProperty(person, 'name', {
    writable: false,//cannot write 
    enumerable: false,//cannot enumerate
    configurable: false//cannot delete
});

person.name = 'kimangas';
delete person.name;

console.log(person);
console.log(Object.keys(person));

/**
 * With the above properties you cannot write or enumerate the person property
 */
