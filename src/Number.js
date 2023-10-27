import { Random } from '@woowacourse/mission-utils';
import { validateIsNumZeroToNine } from './Validation.js';

function createRandomNum() {
	const randomNum = Random.pickNumberInRange(0, 9);
	validateIsNumZeroToNine(randomNum);
	return randomNum;
}
