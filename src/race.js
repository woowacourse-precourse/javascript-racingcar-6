import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame { // 레이싱 게임 결과를 리턴하는 클래스
    async race(cars) {
        for (const car of cars) {
            car.position = this.getRaceCount(car.position);
        }
        // return cars;
    }

    getRaceCount(position) {   
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (num <= 4) {
            position += '-';
        }
        return position;
    }
}

export default RacingGame;
