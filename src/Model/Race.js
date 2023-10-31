import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVING_FORWARD } from "../constants/constants";

export default class Race {
	getRandomNumber() {
		return MissionUtils.Random.pickNumberInRange(0, 9);
	}

  rollDiceAndGoForward(carsObj) {
		const NAMES = Object.keys(carsObj);

		for (let i = 0; i < NAMES.length; i += 1) {
			const RANDOM_NUMBER = this.getRandomNumber();
			if (RANDOM_NUMBER >= MOVING_FORWARD) {
				carsObj[NAMES[i]] += 1;
			}
		}

		return carsObj
	}
}