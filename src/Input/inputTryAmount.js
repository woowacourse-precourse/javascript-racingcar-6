import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../Message/gameMessage.js";

function InputTryAmount() {
  const inputNumber = MissionUtils.Console.readLineAsync(GameMessage.INPUT_TRY_AMOUNT);

  const intNumber = parseInt(inputNumber, 10);

  if (inputNumber.length < 1 || intNumber <= 0) {
    throw new Error(GameMessage.ERROR.TRY_NUMBER_INVALID);
  }

  return intNumber;
}

export default InputTryAmount;
