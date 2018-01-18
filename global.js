console.time("m1");
global.name = "Cool app!";

console.time("m2");
console.log(global.name);
console.assert(global.name == "Cool app!");
console.warn("this is a warning message");
console.timeEnd("m2");

console.timeEnd("m1");