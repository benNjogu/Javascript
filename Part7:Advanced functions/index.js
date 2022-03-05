
const person = {
    firstName: 'ben',
    secondName: 'Njogu',

    get fullName() {
        return `${person.firstName} ${person.secondName}`
    },

    set fullName(value) {
        if (typeof value !== 'string') return;

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }
};

person.fullName = null;

//getters => access properties in an object
//setters => change (mutate) then
console.log(person);
