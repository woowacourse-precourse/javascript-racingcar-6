import { Random, Console } from '@woowacourse/mission-utils';

const ErrorHandler = {
  checkCarNames(carNames) {
    if (!carNames) {
      throw new Error('입력이 없습니다. 경주할 자동차 이름을 입력하세요.');
    }

    const cars = carNames.split(',');

    if (cars.some((car) => car.length >= 5)) {
      throw new Error('차 이름은 5글자를 초과해서는 안됩니다.');
    }

    if (new Set(cars).size !== cars.length) {
      throw new Error('중복된 차 이름이 있습니다.');
    }
  },
};

export default ErrorHandler;
