import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_MESSAGE } from "./Constants.js";
import Validation from "./Validation.js";
import { validate } from "uuid";

class Setting {
  constructor() {
    this.INPUT_CAR = "";
    this.CAR_NAME = "";
    this.INPUT_NUM = "";
    this.PLAY_NUM = "";
  }

  async inputCarName() {
    try {
      this.INPUT_CAR = await Console.readLineAsync(GAME_MESSAGE.CAR_NAME_LIST);
      this.CAR_NAME = this.INPUT_CAR.split(",");

      if (Validation.overFive(this.CAR_NAME)) {
        throw ERROR_MESSAGE.OVER_FIVE;
      }
      if (Validation.noInput(this.CAR_NAME)) {
        throw ERROR_MESSAGE.NO_INPUT;
      }
      if (Validation.isSpacing(this.CAR_NAME)) {
        throw ERROR_MESSAGE.IS_SPACING;
      }
      if (Validation.isRepeat(this.CAR_NAME)) {
        throw ERROR_MESSAGE.IS_REPEAT;
      }
    } catch (error) {
      throw new Error(error);
    }
    return this.CAR_NAME;
  }

  async inputPlay() {
    try {
      this.INPUT_NUM = await Console.readLineAsync(GAME_MESSAGE.PLAY_GAME);

      if (Validation.isNum(this.INPUT_NUM)) {
        throw ERROR_MESSAGE.NO_NUMBER;
      }
    } catch (error) {
      throw new Error(error);
    }
    return this.INPUT_NUM;
  }
}
export default Setting;
