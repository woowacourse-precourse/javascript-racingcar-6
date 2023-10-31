import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
    async race(cars) {

        for (const car of cars) {
            car.position = this.getRaceCount(car.position);
        }

    }

    getRaceCount(position) {   
        const num = MissionUtils.Random.pickNumberInRange(1, 9);

        if (num >= 4) {
            position += '-';
        }
        return position;
        
    }
}

export default RacingGame;
