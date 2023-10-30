import {MissionUtils} from "@woowacourse/mission-utils";
import {INPUT_CARS_STRING, INPUT_PLAY_COUNT_STRING} from "./constants.js";

class Init {
    async getUserInput() {
        MissionUtils.Console.print(INPUT_CARS_STRING);
        const carsString = await MissionUtils.Console.readLineAsync('');
        // 입력받은 문자열 안에 문자, 숫자, 쉼표만이 들어있는지 validate
        // 문자열 분리 함수 호출
        MissionUtils.Console.print(INPUT_PLAY_COUNT_STRING);
        const playCount = await MissionUtils.Console.readLineAsync('');
        // 숫자 validate

        //Racing(carsList, playCount);
    }
}

export default Init;
