import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../Message/gameMessage.js";

async function InputTryAmount() {
  const inputNumber = await MissionUtils.Console.readLineAsync(GameMessage.INPUT_TRY_AMOUNT);
  const intNumber = Number(inputNumber);

  if (inputNumber.length < 1 || intNumber <= 0) {
    throw new Error(GameMessage.ERROR.TRY_NUMBER_INVALID);
  }

  return intNumber;
}

export default InputTryAmount;
