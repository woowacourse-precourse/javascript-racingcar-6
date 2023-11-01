import { Random, Console } from '@woowacourse/mission-utils';

const ErrorHandler = {
  checkCarNames(carNames) {
    if (!carNames) {
      throw new Error('[ERROR] 입력이 없습니다. 경주할 자동차 이름을 입력하세요.');
    }

    const cars = carNames.split(',');

    if (cars.some((car) => car.length == 0)) {
      throw new Error('[ERROR] 차 이름은 1글자 이상이어야 합니다.');
    }

    if (cars.some((car) => car.length > 5)) {
      throw new Error('[ERROR] 차 이름은 5글자를 초과해서는 안됩니다.');
    }

    if (new Set(cars).size !== cars.length) {
      throw new Error('[ERROR] 중복된 차 이름이 있습니다.');
    }
  },

  checkMoveCount(moveCount) {
    if (!moveCount) {
      throw new Error('[ERROR] 입력이 없습니다. 시도할 횟수를 입력하세요.');
    }

    if (isNaN(moveCount)) {
      throw new Error('[ERROR] 숫자만 입력하여 주십시요.');
    }

    if (moveCount < 1) {
      throw new Error('[ERROR] 1이상의 숫자를 입력하여 주십시요.');
    }
  },
};

export default ErrorHandler;
