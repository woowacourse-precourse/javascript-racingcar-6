export default class RacingCar {
	constructor(name) {
		this.name = name;
		this.distance = '';
	}

	go() {
		this.distance += '-';
	}
}
