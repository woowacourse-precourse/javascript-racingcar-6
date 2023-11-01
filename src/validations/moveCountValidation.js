import AppError from '../errors/AppError.js';
import RacingCars from '../models/RacingCar.js';

/**
 * @type {import('../utils/jsDoc.js').MoveCountValidationTypes}
 */
export const MOVE_COUNT_VALIDATION_TYPES = Object.freeze({
  checkTypeOfNumber: Object.freeze({
    errorMessage: '자동차 이동 횟수는 숫자만 가능합니다.',
    isValid(moveCount) {
      return !Number.isNaN(moveCount);
    },
  }),
  checkNaturalNumber: Object.freeze({
    errorMessage: `자동차 이동 횟수는 ${RacingCars.MIN_MOVE_COUNT}보다 커야합니다.`,
    isValid(moveCount) {
      return moveCount > 0 && Number.isInteger(moveCount);
    },
  }),
});

/**
 * @param {number} moveCount - 이동 횟수
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validateMoveCount = (moveCount) => {
  Object.values(MOVE_COUNT_VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
    if (!isValid(moveCount)) throw new AppError(errorMessage);
  });
};
