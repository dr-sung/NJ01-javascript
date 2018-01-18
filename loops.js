let a = [10, 20, 'pen', 'car', {id: 12, name: 'John'}];

let i = 0;
while (i < a.length) {
    console.log(a[i++]);
}

let n = 0;
do {
    console.log(a[n++]);
} while (n < a.length);

for (let p = 0; p < a.length; p++) {
    console.log(a[p]);
}

for (const c of a) { // "of" for value
    console.log(c);
}

for (const c in a) { // "in" for index
    console.log(c, a[c]);
}

for (const [index, element] of a.entries()) {
    console.log(index, element, `type = ${typeof element}`);
}