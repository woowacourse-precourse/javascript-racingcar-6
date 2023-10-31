import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  static getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  static moveCar(racingCar) {
    racingCar.forEach((car) => {
      const randomNum = this.getRandomNumber();

      if (randomNum >= 4) {
        const temp = car;
        temp.forward += 1;
      }
    });
    return racingCar;
  }
}

export default RacingGame;
