import { MissionUtils } from "@woowacourse/mission-utils";
import {
  checkCarNameOver,
  checkCarNameSame,
  checkCarNameWrong,
  checkTryNumber,
} from "../error/Validation.js";

const Console = MissionUtils.Console;

class Input {
  async inputCarNames() {
    try {
      const carInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      checkCarNameOver(carInput);
      checkCarNameWrong(carInput);
      checkCarNameSame(carInput);
      return carInput.split(",").map((name) => name.trim());
    } catch (error) {
      throw error;
    }
  }
  async inputTryNumber() {
    try {
      const numInput = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      checkTryNumber(numInput);
      return numInput;
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
