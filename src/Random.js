import {MissionUtils} from "@woowacourse/mission-utils";

const makeAndFilter = (SIZE) => {
    let RANDOM_ARRAY = [];
    while (RANDOM_ARRAY.length !== SIZE) {
        RANDOM_ARRAY.push(MissionUtils.Random.pickNumberInRange(0, 9));
    }

    return RANDOM_ARRAY.map(v => {
        if (v >= 4) {
            return 1
        }
        return 0;
    });
}
export default makeAndFilter;