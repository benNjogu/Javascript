
//Challenge 1
/*
Create an address object with 
Street 
City 
Zipcode
Then create a function called showAddress(address)
that takes the address and returns key, value pairs.
*/

let address = {
    street: 'kenol',
    city: 'Muranga',
    zipcode: '+254'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);