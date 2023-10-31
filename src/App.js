import { MissionUtils } from "@woowacourse/mission-utils";
import checkCarNameLength from "./checkCarNameLength";

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
    //시도할 횟수
    const ROUNDS = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
  }
}

export default App;
