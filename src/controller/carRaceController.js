import {RacingGame} from "../model/carRaceModel.js";
import {INPUT_CARNAMES,INPUT_RACECOUNT,DISPLAY_RACERESULT} from "../view/carRaceView.js";
import {MissionUtils} from "@woowacourse/mission-utils";

const PLAY = () => {
    try {
        // 1. 사용자로부터 자동차 이름을 입력받습니다.
        const carNames = INPUT_CARNAMES();

        // 2. 사용자로부터 레이스 횟수를 입력받습니다.
        const raceCount = INPUT_RACECOUNT();

        // 3. 레이스 객체를 생성합니다.
        const race = new RacingGame();

        // 4. 입력받은 자동차 이름을 레이스에 추가합니다.
        carNames.forEach((name) => race.addCar(name));

        // 5. 입력받은 횟수만큼 레이스를 실행합니다.
        for (let i = 0; i < raceCount; i++) {
            race.raceOneRound();
        }

        // 6. 레이스의 결과를 얻고 출력합니다.
        const winners = race.getWinners();
        DISPLAY_RACERESULT(winners);

    } catch (error) {
        // 7. 예외가 발생한 경우, 에러 메시지를 출력합니다.
        MissionUtils.Console.print(error.message);
    }
};
export {PLAY};