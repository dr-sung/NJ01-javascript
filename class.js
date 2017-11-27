class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static getClassName() {
        return this.name;
    }
    get xval() { // getter
        return this.x;
    }
    set xval(xx) { // setter
        this.x = xx;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

let p = new Point(10, 20);
console.log(p.toString());
console.log(p.x, p.y);
console.log(Point.getClassName());
p.xval = 60;
console.log(p.xval);