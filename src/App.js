import RacingCar from './Model/RacingCar.js';
import IOManager from './Utils/IOManager.js';
import Validator from './Utils/Validator.js';
import Computer from './Utils/Computer.js';
import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants.js';

class App {
	constructor() {
		this.carArray = [];
	}

	enrollRacingCar = (racingCars) => {
		const carNameArray = racingCars.split(',');

		carNameArray.forEach((name) => {
			const newCar = new RacingCar(name);

			this.carArray.push(newCar);
		});
	};

	moveCar() {
		this.carArray.forEach((car) => {
			const randomNumber = Computer.getRandomNumber();

			if (randomNumber >= CONSTANTS.forwardStandardValue) car.go();

			car.showCarPosition();
		});
	}

	printProcess(playNumber) {
		for (let count = 0; count < playNumber; count++) {
			this.moveCar();
			Console.print('');
		}
	}

	printWinner() {
		let winnerArray = [];

		this.carArray.forEach((car) => {
			if (winnerArray.length === 0 || winnerArray[0].distance === car.distance) {
				winnerArray.push(car);
			} else if (winnerArray[0].distance < car.distance) {
				winnerArray = [car];
			}
		});

		const winnerText = winnerArray.map((car) => car.name).join(', ');

		Console.print(`최종 우승자 : ${winnerText}`);
	}

	printResult(playNumber) {
		Console.print('\n실행 결과');
		this.printProcess(playNumber);
		this.printWinner();
	}

	async play() {
		const racingCars = await IOManager.getUserInput(
			'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
			Validator.checkAllCarNameValidate,
		);

		this.enrollRacingCar(racingCars);

		const playNumber = parseInt(
			await IOManager.getUserInput(
				'시도할 횟수는 몇 회인가요?\n',
				Validator.checkAllCarNameValidate,
			),
		);

		this.printResult(playNumber);
	}
}

export default App;
