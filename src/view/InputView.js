import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message";
import nameValidator from "../validator/nameValidator";
import numberValidator from "../validator/numberValidator";

const InputView = {
  readName: async () => {
    const names = await Console.readLineAsync(MESSAGE.INPUT_NAMES);
    const splittedNames = names.split(",");
    if (!nameValidator.checkLength(splittedNames))
      throw new Error(MESSAGE.INPUT_ERROR);
    return splittedNames;
  },

  readNumber: async () => {
    const number = await Console.readLineAsync(MESSAGE.INPUT_NUMBER);
    if (!numberValidator.isNumber(number)) throw new Error(MESSAGE.INPUT_ERROR);
    return number;
  },
};

export default InputView;
