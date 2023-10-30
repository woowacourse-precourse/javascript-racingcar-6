import { Console } from '@woowacourse/mission-utils';

class ScoreBoard {
  static announceInterimResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default ScoreBoard;
