// for...in is used to loop through the properties of an object

const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let txt = "";

for (let x in person) {
    txt += person[x] + " ";
}