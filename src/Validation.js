import { ERROR_MESSAGE, RACE_NUMBER } from './Constant.js';

class Validation {
  static checkCarName(arr) {
    if (arr.length === 1 && arr[0] === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }

    if (arr.length < RACE_NUMBER.minArrLength) {
      throw new Error(ERROR_MESSAGE.deficiency);
    }

    if (arr.length !== new Set(arr).size) {
      throw new Error(ERROR_MESSAGE.duplication);
    }

    arr.forEach((car) => {
      if (car === '') {
        throw new Error(ERROR_MESSAGE.empty);
      }

      if (car.length > RACE_NUMBER.maxNameLength) {
        throw new Error(ERROR_MESSAGE.over);
      }
    });
  }

  static checkMoveCount(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }

    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }

    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR_MESSAGE.notIntegar);
    }

    if (Number(input) < 1) {
      throw new Error(ERROR_MESSAGE.small);
    }
  }
}

export default Validation;
