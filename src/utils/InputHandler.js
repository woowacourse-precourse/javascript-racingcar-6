import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/message.js";
import {
  hasSameName,
  isIntegerNumber,
  isNoInput,
  isValidNameInput,
  isValidRoundInput,
} from "./validation.js";

class InputHandler {
  async getCarNamesAndCheck() {
    const carsInput = await Console.readLineAsync(GAME_MESSAGE.ASK_CARS_NAME);
    isNoInput(carsInput);
    this.removeLastComma(carsInput);
    const carArr = carsInput.split(",").map((name) => name.trim());

    isValidNameInput(carArr);
    hasSameName(carArr);
    return carArr;
  }

  //인풋 마지막에 ,를 넣으면 자동 삭제
  removeLastComma(carsInput) {
    if (carsInput.endsWith(",")) {
      return carsInput.slice(0, -1);
    }
    return carsInput;
  }

  async getRoundAndCheck() {
    const roundInput = await Console.readLineAsync(
      GAME_MESSAGE.ASK_COUNT_NUMBER
    );
    isNoInput(roundInput);
    const round = parseFloat(roundInput);
    isValidRoundInput(round);
    isIntegerNumber(round);
    return round;
  }
}

export default InputHandler;
