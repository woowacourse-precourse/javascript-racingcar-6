import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

class Input {
  async inputCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carInput.split(",").map((name) => name.trim());
  }
  async inputTryNumber() {
    const numInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return numInput;
  }
}

export default Input;
