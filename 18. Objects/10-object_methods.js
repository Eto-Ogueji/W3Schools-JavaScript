const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// accessing object methods

let name = person.fullName();

// adding a new method to an object

person.name = () => {
    return (this.firstName + " " + this.lastName).toUpperCase();
}