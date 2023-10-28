import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
    constructor(names) {
        this.number = names.length; // 자동차의 개수
        this.names = names;
        this.distances = new Array(number).fill(0);
    }

    moveCars() {
        for (var i = 0; i < this.number; i++) {
            if (this.ismove())
                this.distances[i] += 1;
        }
    }

    // 자동차가 전진할 것인지 판단
    ismove() {
        const number = MissionUtils.Random.pickNumberInRange(0, 9);
        if (number >= 4)
            return true;
        else
            return false;
      };
}

export default Car;