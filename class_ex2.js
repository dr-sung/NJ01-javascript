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
Square.prototype = new MyShape();
Square.prototype.__proto__ = MyShape.prototype;
Square.prototype.width = 0;
Square.prototype.area = function() {
	return this.width * this.width;
}

const sq = new Square();
sq.move(10, 20);
sq.width = 5;
console.log("area = " + sq.area());
console.log("distance = " + sq.distance());