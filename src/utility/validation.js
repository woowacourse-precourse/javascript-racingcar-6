import { ERROR_MESSAGE } from '../constant/message';

export const isWithinZeroToNine = (number) => number >= 0 && number <= 9;

export const isDecimalChar = (character) => /^[0-9]$/.test(character);

export const isValidateNumber = (string) => {
  Array.from(string).forEach((digit) => {
    if (!isDecimalChar(digit)) {
      throw new Error(ERROR_MESSAGE.wrongGameCountInput);
    }
  });
};
