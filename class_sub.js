class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Shape at (${this.x}, ${this.y})`;
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    toString() {
        return 'Circle ' + super.toString() + ` (r=${this.radius})`;
    }
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    toString() {
        return 'Rectangle ' + super.toString()
            + ` (w=${this.width}, h=${this.height})`;
    }
    get area() {
        return this.width * this.height;
    }
}

shapes = [
    new Circle(1, 1, 2),
    new Rectangle(1, 2, 3, 4),
    new Circle(2, 3, 4),
    new Rectangle(0, 0, 10, 20)
];

for (let s of shapes) {
    console.log(s.toString(), "area=" + s.area);
}