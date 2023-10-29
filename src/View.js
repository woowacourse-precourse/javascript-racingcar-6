import { MissionUtils } from "@woowacourse/mission-utils";
import { checkNameValid, checkRoundValid } from "./inputValidCheck.js";

class View {
  async getCarName() {
    const NAME_STRING = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const NAME_ARRAY = NAME_STRING.split(",");
    NAME_ARRAY.forEach((element) => {
      checkNameValid(element);
    });

    return NAME_ARRAY;
  }

  async getRound() {
    const ROUND = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    checkRoundValid(ROUND);
    return ROUND;
  }
}

export default View;
