
//Challenge 2
/*
use a factory function to initialize an address object
use a constructor function too
*/

//Factory function
function makeAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

console.log(makeAddress('kenol', 'Muranga', '+254'));

console.log('------------------------')

//Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('Kihingo', 'Muthithi', '+254');
console.log(address1);
