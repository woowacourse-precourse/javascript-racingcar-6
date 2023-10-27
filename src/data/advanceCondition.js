import { MissionUtils } from '@woowacourse/mission-utils';

export default async function advanceCondition() {
    const number = await MissionUtils.Random.pickNumberInRange(0, 9);
    if(number < 5) {
        return false;
    }

    return true;
}