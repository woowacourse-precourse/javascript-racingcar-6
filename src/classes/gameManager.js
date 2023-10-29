import { Console } from '@woowacourse/mission-utils';

class GameManager {
  static printStatus(racingCars) {
    const status = Array.from(racingCars, (car) => `${car.name} : ${'-'.repeat(car.howFar())}`);
    Console.print(status.join('\n'));
  }
}

export default GameManager;
