import { Console } from '@woowacourse/mission-utils';

class GameManager {
  announceInterimResult() {
    const cars = [{ name: 'pobi', movement: '-' }];
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default GameManager;
