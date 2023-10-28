class Car {
	constructor(name) {
		(this.name = name), (this.count = 0);
	}
	getName() {
		return this.name;
	}
	getCount() {
		return this.count;
	}
	setCount(count) {
		this.count = count;
	}
}

export default Car;
