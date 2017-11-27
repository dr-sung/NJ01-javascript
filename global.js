console.time("m1");
global.name = "Cool app!";
console.log(global.name);
console.assert(global.name == "Cool app!");
console.warn("this is a warning message");
console.timeEnd("m1");