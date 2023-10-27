import { ErrorMessage } from "../static/Static.js";
import { StaticNumber } from "../static/Static.js";

const InputValidator = {
  validateCarName(input) {
    const inputNames = input.split(",");
    if (inputNames.some((name) => name.length > StaticNumber.NAME_LENGTH_LIMIT))
      throw new Error(ErrorMessage.NAME_LENGTH_ERROR);
    if (inputNames.length !== new Set(inputNames).size)
      throw new Error(ErrorMessage.NAME_DUPLICATE_ERROR);
    if (input.replace(/\s/g, "").length !== input.length)
      throw new Error(ErrorMessage.NAME_CONTAIN_GAP_ERROR);
  },

  validateTimesNumber(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorMessage.TIMES_NUMBER_ERROR);
    if (input === Number(0)) throw new Error(ErrorMessage.TIMES_ZERO_ERROR);
  },
};

export default InputValidator;
