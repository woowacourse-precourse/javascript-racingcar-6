import { print, readLineAsync } from "../utils/missionUtils.js";
import { PRINT, READ_LINE_QUERY } from "../constants/message.js";
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

		this.printResult();

		this.printWinners(this.judgeWinners());
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
			this.#goCars(round);
		}
	}

	printResult() {
		print(PRINT.result);

		for (let round = 0; round < this.numberOfAttempts; round += 1) {
			this.#printCars(round);
		}
	}

	/**
	 *
	 * @returns {{ name:string, finalMovingDistance: number }[]}
	 */
	judgeWinners() {
		const finalInfos = this.cars.map((car) => ({
			name: car.getName(),
			finalMovingDistance: car.getMovingDistance(this.numberOfAttempts - 1),
		}));

		const maxMovingDistance = Math.max(
			...finalInfos.map(({ finalMovingDistance }) => finalMovingDistance),
		);

		const winners = finalInfos.filter(
			({ finalMovingDistance }) => finalMovingDistance === maxMovingDistance,
		);

		return winners;
	}

	/**
	 *
	 * @param {{ name:string, finalMovingDistance: number }[]} winners
	 */
	printWinners(winners) {
		const names = winners
			.map((winner) => winner.name)
			.join(PRINT.winnersSeparate);

		print(`${PRINT.winners} : ${names}`);
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 */
	#goCars(round) {
		this.cars.forEach((car) => {
			car.move(round);
		});
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 */
	#printCars(round) {
		this.cars.forEach((car) => this.#printCar(round, car));

		print(PRINT.empty);
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 * @param {Car} car
	 */
	#printCar(round, car) {
		const name = car.getName();
		const movingDistance = car.getMovingDistance(round);

		print(`${name} : ${PRINT.movingDistance.repeat(movingDistance)}`);
	}
}

export default RacingcarGame;
