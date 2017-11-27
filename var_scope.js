const f1 = function() {
    if (true) {
        var value = 2; // function scoped
    }
    console.log(value);
};

const f2 = function() {
    if (true) {
        let value = 2; // block scoped
    }
    console.log(value); // not defined error
}

const f3 = function() {
    if (true) {
        const f4 = function() {
            // scope: based on time
            console.log(someValue);
        };

        // scope: not based on space
        let someValue = 25;
        f4();
    }
}

f3();