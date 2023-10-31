import { ERROR_MESSAGE, STATIC_NUMBER } from "../static/Static.js";

const InputValidator = {
  validateCarName(input) {
    const inputNames = input.split(",");
    if (inputNames.some((name) => name.length > STATIC_NUMBER.nameLengthLimit))
      throw new Error(ERROR_MESSAGE.nameLengthError);
    if (inputNames.length !== new Set(inputNames).size)
      throw new Error(ERROR_MESSAGE.nameDuplicateError);
    if (input.replace(/\s/g, "").length !== input.length)
      throw new Error(ERROR_MESSAGE.nameContainGapError);
    if (input.length === 0) throw new Error(ERROR_MESSAGE.nameInputError);
  },

  validateTimesNumber(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.triesNumberError);
    if (input === "0" || input === "")
      throw new Error(ERROR_MESSAGE.triesZeroError);
  },
};

export default InputValidator;
