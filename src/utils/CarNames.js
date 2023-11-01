import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_TYPE } from "../constants/messages";
import { MAX_NAME_LENGTH } from "../constants/numeric";

class CarNames {
  async getArray() {
    const names = await Console.readLineAsync(`${GAME_MESSAGE.CAR_NAMES}\n`);

    if (names.length === 0) {
      throw new Error(ERROR_TYPE.EMPTY_NAME);
    }

    const arrNames = names.split(",").map((name) => name.trim());

    if (arrNames.some((name) => name.length > MAX_NAME_LENGTH)) {
      throw new Error(ERROR_TYPE.NAME_LENGTH);
    }

    return arrNames;
  }
}

export default CarNames;