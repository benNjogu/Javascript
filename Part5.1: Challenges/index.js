
//Challenge 3  
/*
Create two functions areEqual=>checks if properties are equal
and areSame => checks if 
*/
let address1 = new Address();
let address2 = new Address();
let address3 = address2;

console.log(areEqual(address1, address2));//true
console.log('-----------------')
console.log(areSame(address1, address2));//false
console.log('-----------------')
console.log(areSame(address3, address2));//true

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.street === address2.street &&
        address1.street === address2.street;
}

function areSame(address1, address2) {
    return address1 === address2;
}
