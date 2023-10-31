import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import Car from '../model/Car.js';
import PrintConsole from '../view/PrintConsole.js';
import UserInput from '../view/UserInput.js';

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
	}
}

export default App;
