import { Console } from '@woowacourse/mission-utils';

class ScoreBoard {
  static announceInterimResult(cars) {
    cars.forEach((car) => {
      car.move();
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default ScoreBoard;
