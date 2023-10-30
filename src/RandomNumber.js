import { Random } from '@woowacourse/mission-utils';

function RandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
}

export default RandomNumber;