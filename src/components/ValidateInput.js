import Messages from "../constants/Messages.js";

export class ValidateInput {
  name(inputName, inputNameArray) {
    if (!inputName.length) {
      throw new Error(Messages.ERROR.INVALID_NAME_NULL);
    }
    for (let i = 0; i < inputNameArray.length; i++) {
      if (inputNameArray[i].includes(" ")) {
        throw new Error(Messages.ERROR.INVALID_NAME_NOT_SPACE);
      }
      if (inputNameArray[i].length > 5) {
        throw new Error(Messages.ERROR.INVALID_NAME_LENGTH_LIMIT);
      }
    }
  }
  number(inputNumber) {
    if (!Number.isInteger(inputNumber) || inputNumber < 1) {
      throw new Error(Messages.ERROR.INVALID_NUMBER_INTEGER);
    }
  }
}
