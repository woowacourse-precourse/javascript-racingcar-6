import { ERROR_MESSAGE } from './constant';
import validationUtils from '../modules/utils/validationUtils';

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = validationUtils.checkCarNameIsOverFive(input);
  if (inputHaveOverName) throw new Error(ERROR_MESSAGE.isOverFive);

  const inputHaveBlank = validationUtils.checkCarNamesHaveBlank(input);
  if (inputHaveBlank) throw new Error(ERROR_MESSAGE.isBlank);

  const inputWithBlank = validationUtils.checkCarNameWithBlank(input);
  if (inputWithBlank) throw new Error(ERROR_MESSAGE.isWithBlank);

  const inputsAreDuplicated = validationUtils.checkCarNamesAreDuplicated(input);
  if (inputsAreDuplicated) throw new Error(ERROR_MESSAGE.isDuplicated);

  return input;
};

const checkTryNumberIsValid = (userInput) => {
  const inputHaveBlank = validationUtils.checkTryNumberWithBlank(userInput);
  const inputIsCharacter = validationUtils.checkTryNumberIsCharacter(userInput);

  if (inputHaveBlank || inputIsCharacter) {
    throw new Error(ERROR_MESSAGE.isNotNumber);
  }
};

export { checkCarNamesAreValid, checkTryNumberIsValid };
