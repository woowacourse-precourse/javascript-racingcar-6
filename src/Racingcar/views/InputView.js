import { MissionUtils } from "@woowacourse/mission-utils";
import Validations from "./../validations/index";

class Input {
  static async getCarNames() {
    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNamesInput = await MissionUtils.Console.readLineAsync();
    const carNames = carNamesInput.split(",");
    Validations.validateCarNames(carNames);
    return carNames;
  }

  static async getNumAttempts() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const numAttemptsInput = await MissionUtils.Console.readLineAsync();
    const numAttempts = parseInt(numAttemptsInput);
    Validations.validateNumAttempts(numAttempts);
    return numAttempts;
  }
}

export default Input;
