import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_TYPE } from "../constants/messages";

class Attempts {
  async getNumber() {
    const number = await Console.readLineAsync(`${GAME_MESSAGE.ATTEMPTS}\n`);

    if (number.length === 0) {
      throw new Error(ERROR_TYPE.EMPTY_ATTEMPTS);
    }

    if (!Number.isInteger(+number)) {
      throw new Error(ERROR_TYPE.INTEGER_ATTEMPTS);
    }

    return +number;
  }
}

export default Attempts;