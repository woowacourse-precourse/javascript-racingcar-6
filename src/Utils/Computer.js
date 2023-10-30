import { Random } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants.js';

class Computer {
	static getRandomNumber = () => {
		return Random.pickNumberInRange(CONSTANTS.MIN_RANDOM_VALUE, CONSTANTS.MAX_RANDOM_VALUE);
	};
}

export default Computer;
