import { MissionUtils } from "@woowacourse/mission-utils";
import AboutCar from "./AboutCar.js";

class RacingCar {
    constructor(CARNAME_RESPONSE, PLAYTIME_RESPONSE) {
        this.CARNAMES = CARNAME_RESPONSE.map(name => new AboutCar(name));
        this.PLAYTIME_RESPONSE = PLAYTIME_RESPONSE;
    }

    runRace() {
        // 입력받은 횟수만큼 경주를 반복
        MissionUtils.Console.print("실행 결과");
        for (let i = 0; i < this.PLAYTIME_RESPONSE; i++) {
            this.executeSingleRace();
        }
        // 최종 우승자를 출력
        this.Winner();
    }

    executeSingleRace() {
        this.CARNAMES.forEach(car => car.decideMotion());
        this.RoundResult();
        MissionUtils.Console.print('');
    }

    RoundResult() {
        // 각 횟수별 결과를 출력
        this.CARNAMES.forEach(car => MissionUtils.Console.print(car.displayPosition()));
    }

    Winner() {
        // 가장 많이 전진한 값을 찾음
        const maxPosition = Math.max(...this.CARNAMES.map(car => car.position));
        // 가장 많이 전진한 값과 동일하게 이동한 자동차 이름을 비교
        const winners = this.CARNAMES.filter(car => car.position === maxPosition).map(car => car.name);
        MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}

export default RacingCar;
