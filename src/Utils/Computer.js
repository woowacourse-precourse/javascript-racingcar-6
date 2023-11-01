import { Random } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants.js';

class Computer {
	static getRandomNumber = () => {
		return Random.pickNumberInRange(CONSTANTS.minRandomValue, CONSTANTS.maxRandomValue);
	};
}

export default Computer;
