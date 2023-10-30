import Messages from "./constants/Messages.js";
import { Maximum, Minimum } from "./constants/Standard.js";
import { Console } from "@woowacourse/mission-utils";

class UserInput {
  async getCarNames() {
    try {
      const carNames = await Console.readLineAsync(Messages.GET_CAR_NAMES);
      const carNamesArr = carNames.split(",");
      const [isVaild, message, result] = this.isVaildCarName(carNamesArr);
      if (!isVaild) {
        throw new Error(message);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTryNumber() {
    //사용자로부터 시도 횟수를 입력받는다. (이때, 입력은 문자열임을 주의하자!)
    // isVaildTryNumber() 을 사용하여 정상적인 입력인지 확인한다.
  }

  isVaildCarName(names) {
    if (names.length < Minimum.CAR_NAME_NUMBER) {
      return [false, Messages.ERROR.SHORT_CAR_NAME_NUMBER, null];
    }
    if (names.length > Maximum.CAR_NAME_NUMBER) {
      return [false, Messages.ERROR.EXEED_CAR_NAME_NUMBER, null];
    }
    let carNames = {};
    for (let name of names) {
      if (carNames[name] === 0) {
        return [false, Messages.ERROR.DUPLICATION_CAR_NAME, null];
      }
      if (name.length < Minimum.CAR_NAME_LETTER) {
        return [false, Messages.ERROR.SHORT_CAR_NAME_LETTER, null];
      }
      if (name.length > Maximum.CAR_NAME_LETTER) {
        return [false, Messages.ERROR.EXCEED_CAR_NAME_LETTER, null];
      }
      carNames[name] = 0;
    }

    return [true, "", carNames];
  }

  isVaildTryNumber(stringNumber) {
    const number = Number(stringNumber);

    if (number < Minimum.TRY_NUMBER) {
      return [false, Messages.ERROR.SHORT_TRY_NUMBER, null];
    }
    if (!/^[0-9]+$/.test(stringNumber)) {
      return [false, Messages.ERROR.WRONG_TRY_NUMBER, null];
    }
    if (number > 15) {
      return [false, Messages.ERROR.EXCEED_TRY_NUMBER, null];
    }

    return [true, "", number];
  }
}

export default UserInput;
