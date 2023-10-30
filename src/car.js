import { Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
  }

  static createCarsFromInput(callback) {
    Console.readLine('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)', (carNamesString) => {
      console.log('입력받은 자동차 이름들:', carNamesString);

      const carNames = carNamesString.trim().split(',').map(name => name.trim());

      // 예외 처리: 자동차 이름이 6자 이상일 경우
      if (carNames.some(name => name.length >= 6)) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }

      // 예외 처리: 자동차가 2대 미만일 때
      if (carNames.length < 2) {
        throw new Error('[ERROR] 최소 2대의 자동차가 필요합니다.');
      }

      // 예외 처리: 자동차 이름이 중복일 때
      const uniqueCarNames = [...new Set(carNames)];
      if (carNames.length !== uniqueCarNames.length) {
        throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
      }

      // 예외 처리: 자동차 이름을 입력하지 않고 쉼표만 입력했을 때
      if (carNames.length === 1 && carNames[0] === '') {
        throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
      }

      const cars = carNames.map(name => new Car(name));
      callback(cars);
    });
  }
}

export default Car;
