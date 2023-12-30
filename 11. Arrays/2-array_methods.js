// some array methods

const names = ["WhiteMoney", "Kenny", "Sinzu", "ETG"];

names.toString(); // convert array to comma separated values

names.join(","); // convert comma separated values

names.join(" * "); // convert to asterisk separated values

names.pop(); // remove the last element

names.push("Savage"); // add "Savage" to the end of the array

// the push method returns the new array length
let length = names.push("Daddy"); // adds "Daddy" to the end of the array and returns the new array length

names.shift(); // remove the first array element and "shift" all other elements to a lower index

// The shift() method returns the value that was "shifted out"

let first_value = names.shift();

names.unshift("Mad Dawg"); // adds a new element to an array (at the beginning), and "unshifts" older elements:

// indexing
console.log(names[0]);

console.log(names[names.length])

// merging or concatenating arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys)


// another example

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren1 = arr1.concat(arr2, arr3);

// merging with Values
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr1.concat("Peter");


// flattening an array
// This is the process of reducing the dimensionality of an array

const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();


// Splicing and Slicing arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

names.splice(2, 0, "Davidson777", "BJJPro") // add the two names at position 2 and remove 0 elements


