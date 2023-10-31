import { Random } from '@woowacourse/mission-utils';

export function isRandomNumberGreaterThanOrEqualFour() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
}
