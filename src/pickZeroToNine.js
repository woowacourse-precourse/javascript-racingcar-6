import { MissionUtils } from "@woowacourse/mission-utils";

function pickZeroToNine() {
    const zeroToNine = MissionUtils.Random.pickNumberInRange(0, 9);
    return zeroToNine;
}

export default pickZeroToNine;