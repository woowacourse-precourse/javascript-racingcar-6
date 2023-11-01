import CONSTANTS from '../constants/index.js';

export function validateNumber(arg) {
  if (Number.isNaN(arg)) throw new Error('[ERROR] 인자는 숫자여야 합니다.');
}

export function validateBetweenOneAndNine(number) {
  if (number < CONSTANTS.MIN_BOUND || number > CONSTANTS.MAX_BOUND)
    throw new Error('[ERROR] 숫자는 1과 9사이어야 합니다.');
}

export function validateName(name) {
  if (name.length > CONSTANTS.MAX_NAME_LENGTH)
    throw new Error(
      `[ERROR] 이름은 ${CONSTANTS.MAX_NAME_LENGTH}자 이하만 가능합니다.`
    );
  if (name.length < CONSTANTS.MIN_NAME_LENGTH)
    throw new Error(
      `[ERROR] 이름은 ${CONSTANTS.MIN_NAME_LENGTH}자 이상이어야 합니다.`
    );
}

export function validateNoneZeroLengthInput(str) {
  if (str.trim().length < CONSTANTS.MIN_INPUT_LENGTH)
    throw new Error(
      `[ERROR] 입력값은 ${CONSTANTS.MIN_INPUT_LENGTH}자 이상이어야 합니다.`
    );
}
