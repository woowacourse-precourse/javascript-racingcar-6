import GAME from '../constants/Game.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import driverNamesValidation from '../utils/validation/driverNamesValidation.js';

class RacingTrack {
	#drivers; // {name1: currentLocation, name2: ...}

	constructor() {
		this.#drivers = {};
	}

	initDrivers(drivers) {
		const driverArr = drivers.split(GAME.inputNameDelimiter);

		driverNamesValidation(driverArr);

		driverArr.forEach((name) => (this.#drivers[name] = 0));
	}

	#move() {
		Object.entries(this.#drivers).forEach(([name, _]) => {
			const moveProbability = randomNumberGenerator();

			if (moveProbability >= GAME.moveThreshold) this.#drivers[name]++;
		});
	}

	allMoves() {
		this.#move();

		return this.#drivers;
	}

	getFinalLocations() {
		return this.#drivers;
	}
}

export default RacingTrack;
