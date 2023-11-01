import Validation from "./Validation.js";

class InputValidator {
  static validateRaceCarNameInput(carsName) {
    Validation.validateArrayEmpty(carsName);
    Validation.validateHasDuplicate(carsName);
    Validation.validateInputLength(carsName);
  }

  static validateRaceCountInput(raceCount) {
    Validation.validateInputEmpty(raceCount);
    Validation.validateIsNegative(raceCount);
    Validation.validateIsNumber(raceCount);
  }
}

export default InputValidator;
