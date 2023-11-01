import { MissionUtils } from "@woowacourse/mission-utils";

const movingCondition = (carPosition) => {
    let moveDetermain = MissionUtils.Random.pickNumberInRange(0, 9);
    if (moveDetermain >= 4){
        carPosition += 1;
    }
    return carPosition;
};

export default movingCondition;