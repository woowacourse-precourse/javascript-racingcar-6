import { CAR } from "./Constants.js";
import { Random } from "@woowacourse/mission-utils";

class Car {
	#name;
	constructor(name) {
		if (name.length > CAR.nameLength)
			throw "자동차 이름의 길이는 5자이하여야 합니다";
		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	get canMoveStep() {
		const number = Random.pickNumberInRange(0, 9);
		return number >= CAR.StepsNumber ? true : false;
	}
}
