
const person = {
    firstName: 'ben',
    secondName: 'Njogu',

    get fullName() {
        return `${person.firstName} ${person.secondName}`
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }
};

person.fullName = 'Peter wathiringi';

//getters => access properties in an object
//setters => change (mutate) then
console.log(person.fullName);
