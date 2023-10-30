import RacingCar from './Model/RacingCar.js';
import IOManager from './Utils/IOManager.js';
import Validator from './Utils/Validator.js';

class App {
	constructor() {
		this.carArray = [];
	}

	enrollRacingCar = (racingCars) => {
		const carArray = racingCars.split(',');

		carArray.forEach((name) => {
			const newCar = new RacingCar(name);

			carArray.push(newCar);
		});
	};

	async play() {
		const racingCars = await IOManager.getUserInput(
			'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
			Validator.checkAllCarNameValidate,
		);

		this.enrollRacingCar(racingCars);

		const playNumber = await IOManager.getUserInput(
			'시도할 횟수는 몇 회인가요?\n',
			Validator.checkAllCarNameValidate,
		);
	}
}

export default App;
