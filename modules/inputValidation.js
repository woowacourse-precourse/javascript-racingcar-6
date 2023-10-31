import { MESSAGE } from './constant';
import {
  checkCarNamesHaveBlank,
  checkCarNameIsOverFive,
  checkCarNameWithBlank,
  checkCarNamesAreDuplicated,
  checkTryNumberWithBlank,
  checkTryNumberIsCharacter,
} from '../modules/utils/validationUtils';

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = checkCarNameIsOverFive(input);
  const inputHaveBlank = checkCarNamesHaveBlank(input);
  const inputWithBlank = checkCarNameWithBlank(input);
  const inputsAreDuplicated = checkCarNamesAreDuplicated(input);

  if (
    inputHaveOverName ||
    inputHaveBlank ||
    inputWithBlank ||
    inputsAreDuplicated
  ) {
    throw new Error(MESSAGE.error);
  }
  return input;
};

const checkTryNumberIsValid = (userInput) => {
  const inputHaveBlank = checkTryNumberWithBlank(userInput);
  const inputIsCharacter = checkTryNumberIsCharacter(userInput);

  if (inputHaveBlank || inputIsCharacter) {
    throw new Error(MESSAGE.error);
  }
};

export { checkCarNamesAreValid, checkTryNumberIsValid };
