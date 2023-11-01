import { CARS, RACING } from "../constants/carRacing.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class Validator {
  constructor() {}

  static validateInputCarNames(carListString) {
    const carListArr = carListString
      .split(",")
      .map((carName) => carName.trim());

    carListArr.forEach((carNames) => {
      // 자동차 이름의 길이가 최소 길이보다 작은 경우 에러를 발생시킨다.
      if (carNames.length < CARS.MIN_CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.INPUT_CAR_NAMES_TOO_SHORT);
      }

      // 자동차 이름의 길이가 최대 길이보다 긴 경우 에러를 발생시킨다.
      if (carNames.length > CARS.MAX_CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.INPUT_CAR_NAMES_TOO_LONG);
      }
    });

    // 자동차 이름이 중복된 경우 에러를 발생시킨다.
    if (carListArr.length !== new Set(carListArr).size) {
      throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_IS_DUPLICATED);
    }

    // 자동차의 대수를 최소 대수 미만으로 입력한 경우
    if (carListArr.length < CARS.MIN_COUNT_OF_CARS) {
      throw new Error(ERROR_MESSAGE.INPUT_CARS_LESS_THAN_TWO);
    }

    return true;
  }

  static validateInputNumbersOfMoves(numberOfMovesString) {
    const numberOfMoves = Number(numberOfMovesString);

    if (Number.isNaN(numberOfMoves)) {
      throw new Error(ERROR_MESSAGE.IS_NAN);
    }

    if (numberOfMoves !== parseInt(numberOfMoves, 10)) {
      throw new Error(ERROR_MESSAGE.IS_INTEGER);
    }

    if (numberOfMoves < RACING.MIN_ATTEMPTS_NUMBER) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_MIN);
    }

    if (numberOfMoves > RACING.MAX_ATTEMPTS_NUMBER) {
      throw new ERROR(ERROR_MESSAGE.MORE_THAN_MAX);
    }

    return true;
  }
}

export default Validator;
