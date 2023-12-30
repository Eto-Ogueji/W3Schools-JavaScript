// Create the set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

let text = "";
for (const x of letters.values()) {
    text += x;
}

console.log(text);