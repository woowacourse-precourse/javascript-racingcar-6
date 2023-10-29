import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../Message/gameMessage";

function InputTryAmount(tryNumber) {
  MissionUtils.Console.readLineAsync(tryNumber);

  const intNumber = parseInt(tryNumber, 10);

  if (tryNumber.length < 1 || intNumber <= 0) {
    throw new Error(GameMessage.ERROR.TRY_NUMBER_INVALID);
  }

  return intNumber;
}

export default InputTryAmount;
