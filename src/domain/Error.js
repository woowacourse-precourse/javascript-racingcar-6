import { ERROR } from '../constants/constant.js';

export const userInputCarNameLengthError = (carNamesArray) => {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  if (carNamesArray.length <= 1) {
    throw new Error(ERROR.ERROR_SHORT_LENGTH);
  }
  for (let i = 0; i < carNamesArray.length; i++) {
    if (carNamesArray[i].length > 5) {
      throw new Error(ERROR.ERROR_LONG_LENGTH);
    }
    if (regExp.test(carNamesArray[i])) {
      throw new Error(ERROR.ERROR_TYPE);
    }
  }
};

export const userInputCarNameOverlapError = (carNamesArray) => {
  for (let i = 0; i < carNamesArray.length - 1; i++) {
    if (carNamesArray[i] === carNamesArray[i + 1]) {
      throw new Error('중복 에러');
    }
  }
};

export const userInputTryNumberError = (tryNumber) => {
  if (tryNumber <= 0) {
    throw new Error(ERROR.ERROR_TYPE);
  }
  if (tryNumber % 1 !== 0 || isNaN(tryNumber)) {
    throw new Error(ERROR.ERROR_TYPE);
  }
};

export const userInputCarNameFormError = (carNamesString) => {
  if (carNamesString.split('').includes(' ')) {
    throw new Error(ERROR.ERROR_SPACE);
  }
};
