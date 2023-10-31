import MESSAGE from "./messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";

function carsInputValidator(inputValue) {
  const NAMES = inputValue.split(",");

  if (NAMES.length < 1) {
    return false;
  }

  for (const NAME of NAMES) {
    if (NAME.length < 1 || NAME.length > 5) {
      return false;
    }
  }

  return true;
}

const CARSINPUT = async () => {
  const USERINPUT = await MissionUtils.Console.readLineAsync(MESSAGE.carsInput);
  const VALIDTEST = carsInputValidator(USERINPUT);
  if (!VALIDTEST) {
    throw new Error(MESSAGE.carsInputErr);
  }
  const NAMES = USERINPUT.split(",");
  return NAMES;
};

export default CARSINPUT;
