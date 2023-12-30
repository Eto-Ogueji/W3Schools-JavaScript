// use to loop through the properties of an object

const numbers =[45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

console.log(txt);
console.log(myName = "Eto")

let txt2 = "";
numbers.forEach(myFunction);

function myFunction(value) {
    txt2 += value
}

console.log(txt2);