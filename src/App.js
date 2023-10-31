import { MissionUtils } from "@woowacourse/mission-utils";
import { printMessages } from "./constants";
import {
  generateForwardCount,
  validateCarName,
  validateGetNumber,
} from "./utils";

class App {
  // #1 자동차 이름을 입력받음
  async getCarName() {
    const carList = await MissionUtils.Console.readLineAsync(
      printMessages.GET_CAR_NAMES_MESSAGE
    );
    validateCarName(carList);
  }

  // #2 실행 횟수를 입력받음
  async getTryNumbers() {
    const tryNumber = await MissionUtils.Console.readLineAsync(
      printMessages.TRY_NUMBER_ERROR
    );
    validateGetNumber(tryNumber);
  }

  // #3 getTryNumbers만큼 실행 -> generateForwardCount을 사용
  async forwardCars() {
    generateForwardCount();
  }

  // #4 각 실행 결과를 출력함
  // #5 우승 차량 선정
  // #6 우승 차량 출력
  async play() {}
}

export default App;
