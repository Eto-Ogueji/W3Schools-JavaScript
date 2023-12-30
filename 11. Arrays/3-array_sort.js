const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort(); // in alphabetical order

fruits.reverse(); // reverse order or descending order


const points = [40,100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

points.sort(function(a, b){return b - a});

// compare function: function(a, b){return a - b};
// The purpose of this function is to define an alternative sort order

// This function should return a negative, zero, or positive value, depending on the arguments

