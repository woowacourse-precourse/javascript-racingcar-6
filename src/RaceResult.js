import { Console } from '@woowacourse/mission-utils';
import { RESULT_STATUS } from './Constant.js';

class RaceResult {
  static progress(racingCar) {
    racingCar.forEach((car) => {
      const track = RESULT_STATUS.sign.repeat(car.forward);
      Console.print(`${car.carName} : ${track}`);
    });
    Console.print(RESULT_STATUS.enter);
  }
}

export default RaceResult;
