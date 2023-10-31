import { MissionUtils } from "@woowacourse/mission-utils";
import checkCarNameLength from "./checkCarNameLength";
import checkValidRounds from "./checkValidRounds";
import setArrayToMap from "./setArrayToMap";
import playRandomForwardMove from "./playRandomForwardMove";
import printFinalResult from "./printFinalResult";

class App {
  async play() {
    //1-1. 경주할 자동차 이름 받기
    const USER_INPUT_STRING = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const CARS_ARRAY = USER_INPUT_STRING.split(",");
    checkCarNameLength(CARS_ARRAY);
    //array -> map으로 변환해 저장 (key: car_name, value: move (default : 0))
    const CARS_MAP = setArrayToMap(CARS_ARRAY);

    //1-2. 시도할 횟수 받기
    let rounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    checkValidRounds(rounds);

    //2. 경주
    while (rounds--) {
      playRandomForwardMove(CARS_MAP);
    }

    //3. 종료
    printFinalResult(CARS_MAP);
  }
}

export default App;
