function f1(a, b = 0) {
    console.log("f1: ", a, b);
}
f1(1);
f1(1, 2);

function f2(a, ...rest) {
    console.log("f2: ", a, rest);
}
f2(1);
f2(1, 2);
f2(1, 2, 3);

function f3({a= 10, b=20} = {}) {
    console.log("f3: ", a, b);
}
f3();
f3({a:-5});
f3({b:50});
f3({a:55, b:77});