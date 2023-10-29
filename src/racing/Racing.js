import Car from './Car.js';

class Racing {
	#carArray;

	constructor(_carNameArray) {
		this.#carArray = this.#setCarArray(_carNameArray);
	}

	#setCarArray(carNameArray) {
		return carNameArray.map(name => {
			return new Car(name, 0);
		});
	}

	getCarStateArray() {
		return this.#carArray.map(car => {
			return car.getCarState();
		});
	}

	tryCarsMove() {
		this.#carArray.forEach(car => car.tryMoveForward());
	}
}

export default Racing;