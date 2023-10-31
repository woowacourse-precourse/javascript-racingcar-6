import { MissionUtils } from "@woowacourse/mission-utils";
import checkCarNameLength from "./checkCarNameLength";
import checkValidRounds from "./checkValidRounds";
import setArrayToMap from "./setArrayToMap";
import playRandomForwardMove from "./playRandomForwardMove";
import printFinalResult from "./printFinalResult";

class App {
  async play() {
    //1. 경주할 자동차 이름 받기
    const USER_INPUT_STRING = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    //자동차 쉼표로 분리해서 저장
    const CARS_ARRAY = USER_INPUT_STRING.split(",");
    //예외처리
    checkCarNameLength(CARS_ARRAY);
    //맵으로 만들기
    const CARS_MAP = setArrayToMap(CARS_ARRAY);
    //시도할 횟수
    let rounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    checkValidRounds(rounds);

    //2. 경주
    MissionUtils.Console.print("실행 결과\n");
    while (rounds--) {
      //각 자동차에 대해 0~9 무작위 값 구하기
      playRandomForwardMove(CARS_MAP);
    }

    //3. 종료
    printFinalResult(CARS_MAP);
  }
}

export default App;
