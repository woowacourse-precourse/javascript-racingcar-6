import { MissionUtils } from '@woowacourse/mission-utils';
import { MOVING_FORWARD } from '../constants/constants';

export default class Race {
	getRandomNumber() {
		return MissionUtils.Random.pickNumberInRange(0, 9);
	}

	rollDiceAndGoForward(carsObj) {
		const NAMES = Object.keys(carsObj);
		const CARS_FOR_GOING_FORWARD = carsObj;

		NAMES.forEach((carName) => {
			const RANDOM_NUMBER = this.getRandomNumber();
			if (RANDOM_NUMBER >= MOVING_FORWARD) {
				CARS_FOR_GOING_FORWARD[carName] += 1;
			}
		});

		return CARS_FOR_GOING_FORWARD;
	}
}
