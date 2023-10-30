import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message';

class GameManager {
  static printStatus(racingCars) {
    const status = Array.from(racingCars, (car) => `${car.name} : ${'-'.repeat(car.howFar())}`);
    Console.print(status.join('\n'));
  }

  static printWinner(racingCars) {
    const maxDistance = Math.max(...Array.from(racingCars, (car) => car.howFar()));
    const winners = racingCars
      .filter((car) => car.howFar() === maxDistance)
      .map((car) => car.name);

    Console.print(`${MESSAGE.WINNER}${winners.join(', ')}`);
  }
}

export default GameManager;
