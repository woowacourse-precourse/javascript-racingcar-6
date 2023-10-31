import { print, readLineAsync } from "../utils/missionUtils.js";
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
		this.printResult();
		this.judgeWinners();
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

	printResult() {
		print("\n실행 결과");
		for (let round = 0; round < this.numberOfAttempts; round += 1) {
			this.printCars(round);
		}
	}

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
	 * @param {number} round 몇 라운드인지
	 */
	goCars(round) {
		this.cars.forEach((car) => {
			car.move(round);
		});
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 */
	printCars(round) {
		this.cars.forEach((car) => this.printCar(round, car));
		print("");
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 * @param {Car} car 자동차 객체
	 */
	printCar(round, car) {
		const name = car.getName();
		const movingDistance = car.getMovingDistance(round);
		print(`${name} : ${"-".repeat(movingDistance)}`);
	}
}

export default RacingcarGame;
