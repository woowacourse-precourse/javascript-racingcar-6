import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(carName) {
        this.carName = carName;
    }

    decideCarAction() {
        let condition = MissionUtils.Random.pickNumberInRange(0, 9);
        if(condition >= 4) return true;
        else return false;
    }
}

export default Car;