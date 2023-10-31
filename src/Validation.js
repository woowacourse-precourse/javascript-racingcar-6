import { ERROR_MESSAGE } from './Constant.js';

class Validation {
  static checkCarName(arr) {
    if (arr.length === 1 && arr[0] === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }

    if (arr.length < 2) {
      throw new Error(ERROR_MESSAGE.deficiency);
    }

    if (new Set(arr).size !== arr.length) {
      throw new Error(ERROR_MESSAGE.duplication);
    }

    arr.forEach((car) => {
      if (car === '') {
        throw new Error(ERROR_MESSAGE.empty);
      }

      if (car.length > 5) {
        throw new Error(ERROR_MESSAGE.over);
      }
    });
  }

  static checkMoveCount(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }

    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.number);
    }

    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR_MESSAGE.integar);
    }

    if (Number(input) < 1) {
      throw new Error(ERROR_MESSAGE.small);
    }
  }
}

export default Validation;
