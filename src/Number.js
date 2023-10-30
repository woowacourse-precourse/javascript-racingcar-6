import { Random } from '@woowacourse/mission-utils';
import { validateRandomNum } from './Validation.js';

export function createRandomNum() {
	const randomNum = Random.pickNumberInRange(0, 9);
	validateRandomNum(randomNum);
	return randomNum;
}
