import { readLineAsync } from "../utils/missionUtils.js";
import { READ_LINE_QUERY } from "../constants/message.js";
import validateNamesOfCars from "../validates/validateNamesOfCars.js";
import validateNumberOfAttempts from "../validates/validateNumberOfAttempts.js";
import Car from "./Car.js";

class RacingcarGame {
	/**
	 * @type Car[]
	 */
	cars;

	/**
	 * @type number
	 */
	numberOfAttempts;

	async gameStart() {
		this.cars = (await this.getNamesOfCars()).map((name) => new Car(name));
		this.numberOfAttempts = await this.getNumberOfAttempts();
		this.raceStart();
	}

	async getNamesOfCars() {
		const result = (await readLineAsync(READ_LINE_QUERY.namesOfCars)).split(
			",",
		);
		validateNamesOfCars(result);
		return result;
	}

	async getNumberOfAttempts() {
		const answer = await readLineAsync(READ_LINE_QUERY.numberOfAttempts);
		validateNumberOfAttempts(answer);
		return parseInt(answer, 10);
	}

	raceStart() {
		for (let round = 0; round < this.numberOfAttempts; round += 1) {
			this.goCars(round);
		}
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 */
	goCars(round) {
		this.cars.forEach((car) => {
			car.move(round);
		});
	}
}

export default RacingcarGame;
