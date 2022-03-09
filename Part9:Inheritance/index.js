
let person = { name: 'Ben' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

/**
 * enumerable: false, configurable: true }

    configurable: true

    enumerable: false

    value: function toString()

    writable: true
 */

//The above shows why we cannot enumerate the object properties