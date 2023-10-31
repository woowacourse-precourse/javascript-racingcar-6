import { ERROR_MESSAGE, STATIC_NUMBER } from "../Constant/constant";

const InputValidator = {
  validateInputRaceCarName(input) {
    const raceCarNames = input.split(",");
    if (
      raceCarNames.some(
        (carName) => carName.length > STATIC_NUMBER.nameLengthLimit
      )
    )
      throw new Error(ERROR_MESSAGE.nameLengthError);
    if (raceCarNames.length !== new Set(raceCarNames).size)
      throw new Error(ERROR_MESSAGE.nameDuplicateError);
    if (input.replace(/\s/g, "").length !== input.length)
      throw new Error(ERROR_MESSAGE.nameContainGapError);
    if (input.length === 0) throw new Error(ERROR_MESSAGE.nameInputError);
  },

  validateInputRaceCarNumberOfAttempts(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.attemptsNumberError);
    if (input === "0" || input === "")
      throw new Error(ERROR_MESSAGE.attemptsZeroError);
  },
};

export default InputValidator;
