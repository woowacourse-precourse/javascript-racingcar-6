import { MissionUtils } from '@woowacourse/mission-utils';

export default function advanceCondition() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if(number < 5) {
        return false;
    }

    return true;
}