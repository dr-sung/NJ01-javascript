const m = new Map();
const key1 = 'abc'; // a string
const key2 = {}; // an object
const key3 = function(){}; // a function

m.set(key1, 'value for key1');
m.set(key2, 'value for key2');
m.set(key3, 'value for key3');

console.log(m.size); // 3
console.log(key1, m.get(key1)); 
console.log(key2, m.get(key2)); 
console.log(key3, m.get(key3)); 

console.log('abc', m.get(key1)); 
console.log('{}', m.get({}));  // key2 !== {}
console.log('function(){}', m.get(function(){})); // key3 !== function(){}

for (const [key, value] of m) {
    console.log('loop:', key, value);
}