import { View } from '../View/View.js';
import { ERROR } from '../constants/Error.js';
import { Validator } from '../utils/Validator.js';

const { NON_EXIST, GAP, LENGTH, DUPLICATE } = ERROR;
const { isPresent, isContainSpace, isCorrectLength, isDuplicate } = Validator;

export default class RacingCar {
  #racingCars;

  constructor() {
    this.#racingCars = [];
  }

  getRacingCars(carNames) {
    const racingCars = carNames.split(',');
    this.validateRacingCars(racingCars);

    this.#racingCars.push(...racingCars);
  }

  validateRacingCars(arr) {
    arr.forEach((value) => {
      View.throwError(NON_EXIST, isPresent(value));
      View.throwError(GAP, isContainSpace(value));
      View.throwError(LENGTH, isCorrectLength(value));
    });
    View.throwError(DUPLICATE, isDuplicate(arr));

    return true;
  }
}
