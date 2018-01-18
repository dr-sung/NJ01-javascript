function wrong() {
    throw new Error("something's wrong");
}

try {
    wrong();
} catch (e) {
    console.log("An error is caught: " + e.message);
}

try {
    console.log('started');
    throw 'error message';
    console.log('can you see this message?');
} catch (e) {
    console.log(e);
}