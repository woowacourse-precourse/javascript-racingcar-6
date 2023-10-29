import GAME from '../constants/Game.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import driverNamesValidation from '../utils/validation/driverNamesValidation.js';
import tryCountValidation from '../utils/validation/tryCountValidation.js';

class RacingTrack {
	#drivers; // {name1: currentLocation, name2: ...}

	constructor() {
		this.#drivers = {};
	}

	initDrivers(drivers) {
		// TODO: 유효성 검사 필요
		const driverArr = drivers.split(GAME.inputNameDelimiter);

		driverNamesValidation(driverArr);

		driverArr.forEach((name) => (this.#drivers[name] = 0));
	}

	#move() {
		// 커런트 자체를 증가시켜야하나?
		Object.entries(this.#drivers).forEach(([name, _]) => {
			const moveProbability = randomNumberGenerator();

			if (moveProbability >= GAME.moveThreshold) this.#drivers[name]++;
		});
	}

	allDriversSingleMoveLocation() {
		this.#move();

		return this.#drivers;
	}

	getFinalLocations() {
		return this.#drivers;
	}
}

export default RacingTrack;
