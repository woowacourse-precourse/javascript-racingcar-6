import SYSTEM_MESSAGES from './constants/SystemMessages.js';
import Car from './model/Car.js';
import PrintConsole from './view/PrintConsole.js';
import UserInput from './view/UserInput.js';

class App {
	#userInput;
	#printConsole;
	#racingCars;

	constructor() {
		this.#userInput = new UserInput();
		this.#printConsole = new PrintConsole();
		this.#racingCars = [];
	}

	async play() {
		const carNames = await this.#userInput.inputRacingCarName();
		this.#racingCars = carNames.map((carName) => new Car(carName));

		const attempts = await this.#userInput.inputAttemptsNum();
		this.#printConsole.showMessage(SYSTEM_MESSAGES.execution_result);
		for (let i = 0; i < attempts; i++) {
			this.#racingCars.forEach((racingCar) => racingCar.forward());
			this.#printConsole.showMessage(''); // 출력시 각 시도마다 보기좋게 구분을 위한 한줄 공백 추가
		}

		const racingWinner = this.#racingCars.reduce(
			(acc, cur) => {
				if (acc.distance < cur.distance) {
					acc = { name: [cur.name], distance: cur.distance };
				} else if (acc.distance === cur.distance) {
					acc.name.push(cur.name);
				}

				return acc;
			},
			{ name: [], distance: 0 }
		);

		this.#printConsole.showGameResult(racingWinner.name);
	}
}

export default App;
