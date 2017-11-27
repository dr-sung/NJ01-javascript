const iterable = ['a', 'b', 'c'];
for (const c of iterable) {
    console.log(c); // a b c
}
for (const x of ['a', 'b', '', 'c']) {
    if (x.length == 0) break;
    console.log(x); // a b
}
for (const [index, element] of iterable.entries()) {
    console.log(`${index} -> ${element}`);
}
const map = new Map([
    ['email', 'henry@uco.edu'],
    ['phone', '405-974-2000'],
    ['id', '*12345678']
]);
for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
}