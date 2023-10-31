import Messages from "./constants/Messages.js";
import { Maximum, Minimum } from "./constants/Standard.js";
import { Console } from "@woowacourse/mission-utils";

class UserInput {
  async getCarNames() {
    try {
      const carNames = await Console.readLineAsync(Messages.GET_CAR_NAMES);
      const [isVaild, message, result] = this.isVaildCarName(
        carNames.split(",")
      );
      if (!isVaild) {
        throw new Error(message);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTryNumber() {
    try {
      const tryNumber = await Console.readLineAsync(Messages.GET_TRY_NUMBER);
      const [isVaild, message, result] = this.isVaildTryNumber(tryNumber);
      if (!isVaild) {
        throw new Error(message);
      }
      return result;
    } catch (error) {
      throw error;
    }
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
