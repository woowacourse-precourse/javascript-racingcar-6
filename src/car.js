import { Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
  }

  static createCarsFromInput(callback) {
    Console.readLine('자동차 이름을 입력하세요.', (carNamesString) => {
      console.log('입력받은 자동차 이름들:', carNamesString);

      const carNames = carNamesString.trim().split(',').map(name => name.trim());
      const cars = carNames.map(name => new Car(name));
      callback(cars);
    });
  }
}

export default Car;
