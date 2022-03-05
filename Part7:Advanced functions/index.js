
const person = {
    firstName: 'ben',
    secondName: 'Njogu',

    get fullName() {
        return `${person.firstName} ${person.secondName}`
    },

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.')

        this.firstName = parts[0];
        this.secondName = parts[1];
    }
};

try {
    person.fullName = '';
} catch (e) {
    console.log(e);
    alert(e);
}

//getters => access properties in an object
//setters => change (mutate) then
console.log(person);
