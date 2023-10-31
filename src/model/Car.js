import { MissionUtils } from '@woowacourse/mission-utils';
import CONDITIONS from '../constants/Conditions.js';
import PrintConsole from '../view/PrintConsole.js';

class Car {
	#name;
	#distance;
	#printConsole;

	constructor(carName) {
		this.#name = carName;
		this.#distance = 0;
		this.#printConsole = new PrintConsole();
	}

	get name() {
		return this.#name;
	}

	get distance() {
		return this.#distance;
	}
}

export default Car;
