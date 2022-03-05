
const person = {
    firstName: 'ben',
    secondName: 'Njogu',

    fullName() {
        return `${person.firstName} ${person.secondName}`
    }
};

console.log(person.fullName());
