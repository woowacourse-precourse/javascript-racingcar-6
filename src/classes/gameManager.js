import { Console } from '@woowacourse/mission-utils';

class GameManager {
  static printStatus(racingCars) {
    const status = Array.from(racingCars, (car) => `${car.name} : ${'-'.repeat(car.howFar())}`);
    Console.print(status.join('\n'));
  }

  static printWinner(racingCars) {
    const winnerFar = Math.max(...Array.from(racingCars, (car) => car.howFar()));
    const winners = racingCars
      .filter((car) => car.howFar() === winnerFar)
      .map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default GameManager;
