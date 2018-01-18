function MyShape() {
	this.x = 0;
	this.y = 0;
	this.move = function(x, y) {
		this.x = x;
		this.y = y;
	}
	this.distance = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	this.area = function() {
		throw Error("area of MyShape???");
	}
}

const s = new MyShape();
s.move(1, 1);
console.log("distance  = " + s.distance());

function Square() {
}

// inherite properties from MyShape superclass
Square.prototype = new MyShape();
// add new properties
Square.prototype.width = 0;
// override 'area' function
Square.prototype.area = function() {
	return this.width * this.width;
}

const sq = new Square();
sq.move(10, 20);
sq.width = 5;
console.log("area = " + sq.area());
console.log("distance = " + sq.distance());