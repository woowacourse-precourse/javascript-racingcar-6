import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message";
import nameValidator from "../validators/nameValidator";
import numberValidator from "../validators/numberValidator";

const InputView = {
  readName: async () => {
    const names = await Console.readLineAsync(MESSAGE.inputNames);
    const splittedNames = names.split(",");
    if (!nameValidator.checkLength(splittedNames))
      throw new Error(MESSAGE.inputError);
    if (!nameValidator.checkDuplicateNames(splittedNames))
      throw new Error(MESSAGE.inputError);
    return splittedNames;
  },

  readNumber: async () => {
    const number = await Console.readLineAsync(MESSAGE.inputNumber);
    if (!numberValidator.isNumber(number)) throw new Error(MESSAGE.inputError);
    return number;
  },
};

export default InputView;
