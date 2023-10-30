import { MissionUtils } from "@woowacourse/mission-utils";
import Error from "../error/Error";

const Console = MissionUtils.Console;

class Input {
  constructor() {
    this.error = new Error();
  }
  async inputCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.error.checkCarName(carInput);
    // 예외처리 통과해야 return이 실행
    return carInput.split(",").map((name) => name.trim());
  }
  async inputTryNumber() {
    const numInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.error.checkTryNumber(numInput);
    // 예외처리 통과해야 return이 실행
    return numInput;
  }
}

export default Input;
