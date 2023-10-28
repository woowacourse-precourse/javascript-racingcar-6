import { CAR_NAME_LENGTH } from './constants.js';

export const validateCarName = (carName) => {
  Validator.length(carName);
  Validator.blank(carName);
  Validator.duplication(carName);
};

export const validateTryNumber = (tryNumber) => {
  Validator.numberType(tryNumber);
};

const isBelowNameLength = (input) => input.length <= CAR_NAME_LENGTH;

const isBlank = (input) => input.trim() === '';

const Validator = {
  length(input) {
    if (!input.every(isBelowNameLength)) {
      throw new Error(
        `[ERROR] 자동차 이름은 ${CAR_NAME_LENGTH}자 이하여야 합니다.`
      );
    }
  },

  blank(input) {
    if (input.some(isBlank)) {
      throw new Error('[ERROR] 공백의 이름을 입력했습니다.');
    }
  },

  duplication(input) {
    if (new Set(input).size !== input.length) {
      throw new Error('[ERROR] 동일한 이름을 중복하여 입력했습니다.');
    }
  },

  numberType(input) {
    if (Number.isNaN(input)) {
      throw new Error('[ERROR] 숫자 형식으로만 입력해야 합니다.');
    }

    if (input <= 0 || input % 1 !== 0) {
      throw new Error('[ERROR] 양의 정수만 입력해야 합니다.');
    }
  },
};
