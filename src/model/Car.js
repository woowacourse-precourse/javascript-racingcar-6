import { MissionUtils } from '@woowacourse/mission-utils';
import CONDITIONS from '../constants/Conditions.js';

class Car {
	#name;
	#distance;

	constructor(carName) {
		this.#name = carName;
		this.#distance = 0;
	}

	get name() {
		return this.#name;
	}

	get distance() {
		return this.#distance;
	}

	#checkFordwardCondition() {
		return MissionUtils.Random.pickNumberInRange(0, 9) >= CONDITIONS.minimum_forward_value;
	}

	forward() {
		if (this.#checkFordwardCondition()) this.#distance += 1;
	}
}

export default Car;
