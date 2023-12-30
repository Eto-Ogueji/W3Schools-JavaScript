const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters.size);
console.log(letters.values())

let txt = "";
letters.forEach(myfunction);
console.log(txt);

function myfunction (value){
    txt += value;
}

console.log(letters.has('a'));
console.log(letters.has('z'));


