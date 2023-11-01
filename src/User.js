import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, LIMIT } from "./constant.js";

class User {
  static async inputCarName() {
    const inputValue = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    User.validateCarName(inputValue);
    return inputValue.split(",");
  }

  static async inputAttempts() {
    const inputValue = await Console.readLineAsync(MESSAGE.INPUT_ATTEMPTS);
    User.validateAttempts(inputValue);
    return inputValue;
  }

  static validateCarName(inputString) {
    if (!inputString) throw new Error("[ERROR] 입력 값이 없습니다.");
    if (!inputString.includes(",")) {
      throw new Error("[ERROR] 최소 2개의 자동차 이름을 입력해주십시오.");
    }
    if (inputString.startsWith(",") || inputString.endsWith(",")) {
      throw new Error("[ERROR] 입력 값이 쉼표로 시작하거나 끝날 수 없습니다.");
    }
    const inputList = inputString.split(",");
    inputList.forEach((item) => {
      if (item.length > LIMIT.CAR_NAME_LENGTH) {
        throw new Error(
          `[ERROR] 각 자동차의 이름은 ${LIMIT.CAR_NAME_LENGTH}자 이하이어야 합니다.`,
        );
      }
    });

    const uniqueNameSet = [...new Set(inputList)];
    if (uniqueNameSet.length !== inputList.length) {
      throw new Error(
        "[ERROR] 같은 이름이 존재합니다. 각 자동차의 이름은 모두 달라야 합니다.",
      );
    }
  }

  static validateAttempts(inputValue) {
    const formattedValue = Number(inputValue);

    if (Number.isNaN(formattedValue))
      throw new Error("[ERROR] 잘못된 타입입니다. 숫자를 입력해주세요.");

    if (formattedValue <= 0)
      throw new Error("[ERROR] 1 이상의 숫자를 입력해주세요.");

    if (!Number.isInteger(formattedValue))
      throw new Error("[ERROR] 잘못된 숫자 형식입니다.");
  }
}

export default User;
