import GAME from '../constants/Game.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import driverNamesValidation from '../utils/validation/driverNamesValidation.js';
import Car from './Car.js';

class RacingTrack {
	#drivers; // {name1: currentLocation, name2: ...}

	constructor() {
		this.#drivers = [];
	}

	initDrivers(drivers) {
		const driverArr = drivers.split(GAME.inputNameDelimiter);

		driverNamesValidation(driverArr);

		driverArr.forEach((name) => this.#drivers.push(new Car(name)));
		console.log(this.#drivers);
	}

	allDriverMoves() {
		this.#drivers.forEach((driver) => driver.move());

		return this.#drivers;
	}

	/**
	 * 게임 종료 후 트랙위의 차량 정보 리스트
	 * @returns Car() []
	 */
	getFinalTrack() {
		return this.#drivers;
	}
}

export default RacingTrack;
