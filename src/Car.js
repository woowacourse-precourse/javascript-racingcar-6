import { CAR } from "./Constants.js";
import { Random, Console } from "@woowacourse/mission-utils";

class Car {
	#name;
	#steps;

	constructor(name) {
		this.#name = name;
		this.#steps = "";
	}

	get name() {
		return this.#name;
	}

	get steps() {
		return this.#steps;
	}

	get printCarStpes() {
		return Console.print(`${this.#name} : ${this.#steps}`);
	}

	canMoveStep() {
		const number = Random.pickNumberInRange(CAR.randomMin, CAR.randomMax);
		number >= CAR.StepsNumber && (this.#steps += "-");
		return this;
	}
}

export default Car;
