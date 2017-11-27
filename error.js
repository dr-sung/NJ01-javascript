function wrong() {
    throw new Error("something's wrong");
}

try {
    wrong();
} catch (e) {
    console.log("An error is caught: " + e.message);
}