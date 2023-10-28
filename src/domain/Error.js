import { ERROR } from '../constants/constant.js';

export const userInputCarNameLengthError = (carNamesArray) => {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  for (let i = 0; i < carNamesArray.length; i++) {
    if (carNamesArray[i].length > 5) {
      throw new Error(ERROR.ERROR_LENGTH);
    }
    if (regExp.test(carNamesArray[i])) {
      throw new Error(ERROR.ERROR_TYPE);
    }
  }
};

export const userInputTryNumberError = (tryNumber) => {
  if (tryNumber <= 0) {
    throw new Error(ERROR.ERROR_TYPE);
  }
  if (isNaN(tryNumber)) {
    throw new Error(ERROR.ERROR_TYPE);
  }
};

export const userInputCarNameFormError = (carNamesString) => {
  if (carNamesString.split('').includes(' ')) {
    throw new Error(ERROR.ERROR_SPACE);
  }
};
