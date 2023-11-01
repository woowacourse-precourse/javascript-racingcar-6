import { MissionUtils } from '@woowacourse/mission-utils';
import { Car } from './CarInfo.js';

export class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  gameRound() {
    this.cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      car.goFoward(randomNumber);
    });
  }

  getWinners() {
    const maxFoward = Math.max(...this.cars.map((car) => car.foward));
    return this.cars.filter((car) => car.foward === maxFoward).map((car) => car.name);
  }
}
