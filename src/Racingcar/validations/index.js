import { MissionUtils } from "@woowacourse/mission-utils";

class Validations {
  static validateCarNames(carNames) {
    if (!carNames.every((name) => name.length <= 5)) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  }

  static validateNumAttempts(numAttempts) {
    if (isNaN(numAttempts) || numAttempts <= 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식이거나 0보다 작습니다.");
    }
  }
}

export default Validations;
