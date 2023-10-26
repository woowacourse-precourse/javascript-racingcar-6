import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(carName) {
        this.carName = carName;
    }

    decideCarAction() {
        let condition = MissionUtils.Random.pickNumberInRange(0, 9);
        if(condition >= 4) return true; // 전진
        else return false; // 멈춤
    }
}

export default Car;