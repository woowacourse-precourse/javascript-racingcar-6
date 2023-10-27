import { Random } from '@woowacourse/mission-utils';

function createRandomNum() {
	const randomNum = Random.pickNumberInRange(0, 9);
	return randomNum;
}

createRandomNum();
