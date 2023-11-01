import { Random } from '@woowacourse/mission-utils';

export default function MoveForward() {
	const randomNumber = Random.pickNumberInRange(0, 9);
	const FORWARD = true;
	const STAY = false;
	if (randomNumber >= 4) {
		return FORWARD;
	}
	return STAY;
}
