import { Random } from '@woowacourse/mission-utils';
import { RACE_NUMBER } from './Constant.js';

class RacingGame {
  static getRandomNumber() {
    return Random.pickNumberInRange(RACE_NUMBER.minRandom, RACE_NUMBER.maxRandom);
  }

  static moveCar(racingCar) {
    racingCar.forEach((car) => {
      const randomNumber = this.getRandomNumber();

      if (this.judgeMove(randomNumber)) {
        const driveCar = car;
        driveCar.forward += 1;
      }
    });
    return racingCar;
  }

  static judgeMove(randomNumber) {
    return randomNumber >= RACE_NUMBER.drive;
  }
}

export default RacingGame;
