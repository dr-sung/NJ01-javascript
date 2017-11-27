function car (mpg) {
	this.odometer = 0;
	this.gas = 0;
	this.mpg = mpg;
	this.drive = function(miles) {
		this.odometer += miles;
		this.gas -= miles / mpg;
	}
}

let c1 = new car(10);
console.log(c1.odometer, c1.gas, c1.mpg);
c1.gas = 5;
c1.drive(20);
console.log(c1.odometer, c1.gas, c1.mpg);
car.prototype.make = null; // adding a new property
let c2 = new car(35);
c2.make = 'Ford';
console.log(c2.odometer, c2.gas, c2.mpg, c2.make);
car.prototype.reset = function ( ) {this.odometer = 0;}
c1.make = 'GM';
c1.reset();
console.log(c1.odometer, c1.gas, c1.mpg, c1.make);