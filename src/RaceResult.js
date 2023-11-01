import { Console } from '@woowacourse/mission-utils';
import { RESULT_STATUS } from './Constant.js';

class RaceResult {
  static progress(racingCar) {
    racingCar.forEach((car) => {
      const track = RESULT_STATUS.sign.repeat(car.forward);
      Console.print(`${car.carName} : ${track}`);
    });
    Console.print('');
  }

  static findWinner(racingCar) {
    const maxForward = Math.max(...racingCar.map((car) => car.forward));
    const winner = racingCar.filter((car) => car.forward === maxForward).map((car) => car.carName);

    Console.print(RESULT_STATUS.winner + winner.join(', '));
  }
}

export default RaceResult;
