import { Random } from '@woowacourse/mission-utils';
import { RACE_NUMBER } from './Constant.js';

class RacingGame {
  static getRandomNumber() {
    return Random.pickNumberInRange(RACE_NUMBER.minRandom, RACE_NUMBER.maxRandom);
  }

  static moveCar(racingCar) {
    racingCar.forEach((car) => {
      const randomNum = this.getRandomNumber();

      if (randomNum >= RACE_NUMBER.drive) {
        const driveCar = car;
        driveCar.forward += 1;
      }
    });
    return racingCar;
  }
}

export default RacingGame;
