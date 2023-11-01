import AppError from '../errors/AppError.js';
import { SYMBOLS } from '../constants/symbols.js';

/**
 * @type {import('../utils/jsDoc.js').CommonValidationTypes}
 */
export const COMMON_VALIDATION_TYPES = Object.freeze({
  emptyValues: Object.freeze({
    errorMessage: '아무것도 입력하지 않았으므로 다시 입력해주세요.',
    isValid: (inputValue) => inputValue !== SYMBOLS.emptyString,
  }),
  existSpaces: Object.freeze({
    errorMessage: '입력한 값에 공백이 존재합니다.',
    isValid: (inputValue) => !inputValue.includes(SYMBOLS.space),
  }),
});

/**
 * @param {string} inputValue - 사용자의 입력 값
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validateCommon = (inputValue) => {
  Object.values(COMMON_VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
    if (!isValid(inputValue)) throw new AppError(errorMessage);
  });
};
