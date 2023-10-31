import validation from './validation.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, RULE } from './constants/constants.js';
import { SetRacingCar } from './RacingCar.js';

export class RacingGame {
	async getCars() {
		const input = await Console.readLineAsync(MESSAGE.CAR_NAMES_INPUT);
		const carsName = input.split(',');
		validation.carsNameValid(carsName);
		return carsName;
	}

	async getTryNumber() {
		const input = await Console.readLineAsync(MESSAGE.TRY_NUMBER_INPUT);
		const tryNumber = Number(input);
		validation.tryNumberValid(tryNumber);

		return tryNumber;
	}

	setRacing(cars) {
		let readyCars = [];
		cars.forEach((car) => {
			const setCar = new SetRacingCar(car);
			readyCars.push(setCar);
		});
		return readyCars;
	}

	getRandomNumber() {
		return Random.pickNumberInRange(RULE.MIN_LIMIT, RULE.MAX_LIMIT);
	}

	roundResult(readyCars) {
		for (let car of readyCars) {
			const random = this.getRandomNumber();
			RULE.RUN_LIMIT <= random ? car.run() : '';
			car.state();
		}
		Console.print('');
	}

	racingStart(tryNumber, readyCars) {
		Console.print(MESSAGE.STARTING_TITLE);
		for (let round = 0; round < tryNumber; round++) {
			this.roundResult(readyCars);
		}
	}

	finalResult(readyCars) {
		const maxScore = Math.max(...readyCars.map((car) => car.score));
		const win = readyCars.filter((car) => maxScore === car.score);

		const winners = win.map((a) => a.car);
		Console.print(`최종 우승자 : ${winners.toString()}`);
	}

	async start() {
		const cars = await this.getCars();
		const readyCars = this.setRacing(cars);
		const tryNumber = await this.getTryNumber();

		this.racingStart(tryNumber, readyCars);
		this.finalResult(readyCars);
	}
}
