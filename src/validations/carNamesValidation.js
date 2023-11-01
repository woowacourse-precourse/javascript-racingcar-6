import AppError from '../errors/AppError.js';
import RacingCars from '../models/RacingCar.js';

/**
 * @type {import('../utils/jsDoc.js').CarNamesValidationTypes}
 */

export const CAR_NAME_VALIDATION_TYPES = Object.freeze({
  duplicateCarNames: Object.freeze({
    errorMessage: '중복된 자동차 이름이 존재합니다.',
    isValid(carNames) {
      const uniqueCarNames = new Set(carNames);
      return carNames.length === uniqueCarNames.size;
    },
  }),
  lengthOfCarName: Object.freeze({
    errorMessage: `자동차 이름은 ${RacingCars.MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
    isValid(carNames) {
      return carNames.every((carName) => carName.length <= RacingCars.MAX_CAR_NAME_LENGTH);
    },
  }),
});

/**
 * @param {string[]} carNames - 입력 받은 자동차 이름들
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validateCarNames = (carNames) => {
  Object.values(CAR_NAME_VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
    if (!isValid(carNames)) throw new AppError(errorMessage);
  });
};
