import MESSAGE from "./messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";

function tryInputValidator(inputValue) {
  const NUMBER = parseFloat(inputValue);

  if (isNaN(NUMBER)) {
    return false;
  }

  return true;
}

const TRYINPUT = async () => {
  const USERINPUT = await MissionUtils.Console.readLineAsync(MESSAGE.tryInput);
  const VALIDTEST = tryInputValidator(USERINPUT);
  if (!VALIDTEST) {
    throw new Error(MESSAGE.tryInputErr);
  }
  const NUMBER = parseFloat(USERINPUT);
  return NUMBER;
};

export default TRYINPUT;
