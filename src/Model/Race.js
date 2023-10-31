import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVING_FORWARD } from "../constants/constants";

export default class Race {
	getRandomNumber() {
		return MissionUtils.Random.pickNumberInRange(0, 9);
	}

  rollDiceAndGoForward(carsObj) {
		const NAMES = Object.keys(carsObj);
		const CARS_FOR_GOING_FORWARD = carsObj

		for (let i = 0; i < NAMES.length; i += 1) {
			const RANDOM_NUMBER = this.getRandomNumber();
			if (RANDOM_NUMBER >= MOVING_FORWARD) {
				CARS_FOR_GOING_FORWARD[NAMES[i]] += 1;
			}
		}

		return CARS_FOR_GOING_FORWARD;
	}
}