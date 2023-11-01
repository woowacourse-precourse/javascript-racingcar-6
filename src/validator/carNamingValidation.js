import { RULES } from '../constants';
import RacingCarError from '../error/RacingCarError';

export const carNamingValidation = carNames => {
  Object.values(carNamingValidation.validation).forEach(
    ({ errorMessage, isInvalid }) => {
      if (isInvalid(carNames)) throw new RacingCarError(errorMessage);
    },
  );
};

carNamingValidation.validation = Object.freeze({
  empty: Object.freeze({
    errorMessage: '빈 문자열입니다.',
    isInvalid(cars) {
      return cars.length === 0;
    },
  }),
  sidesOfSyntaxSeperator: Object.freeze({
    errorMessage: '문법오류가 존재합니다.',
    isInvalid(cars) {
      if (cars.at(0) === RULES.seperator) return true;
      if (cars.at(cars.length - 1) === RULES.seperator) return true;
      return false;
    },
  }),
  duplication: Object.freeze({
    errorMessage: '중복 네이밍이 존재합니다.',
    isInvalid(cars) {
      const splitedCars = cars.split(RULES.seperator);
      const setOfCars = new Set(splitedCars);
      return splitedCars.length !== setOfCars.size;
    },
  }),
  maxLength: Object.freeze({
    errorMessage: `자동차 네이밍은 ${RULES.namingMaxLength}자리 이하여야 합니다.`,
    isInvalid(cars) {
      const splitedCars = cars.split(RULES.seperator);
      return !splitedCars.every(carName => {
        return carName.length <= RULES.namingMaxLength;
      });
    },
  }),
});

export default carNamingValidation;
