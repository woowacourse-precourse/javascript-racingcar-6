import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9); 
    if (randomNumber >= 4) { 
      this.distance++;
      if (this.distance > Car.maxDistance) {
        Car.maxDistance = this.distance;
      }
    }
  }

  getDistanceString() {
    return '-'.repeat(this.distance);
  }
  
  static maxDistance = 0;

  static async createCarsFromInput() {
    const carNamesString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)로 구분): \n');

    const carNames = carNamesString.trim().split(',').map(name => name.trim());

    if (carNames.some(name => name.length >= 6)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }

    if (carNames.length < 2) {
      throw new Error('[ERROR] 최소 2대의 자동차가 필요합니다.');
    }

    const uniqueCarNames = [...new Set(carNames)];
    if (carNames.length !== uniqueCarNames.length) {
      throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
    }

    if (carNames.length === 1 && carNames[0] === '') {
      throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
    }

    const cars = carNames.map(name => new Car(name));
    return cars;
  }
}

export default Car;
