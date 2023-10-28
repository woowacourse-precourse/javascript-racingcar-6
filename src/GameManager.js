import { Console } from '@woowacourse/mission-utils';
import { INPUT_CARS } from './constants/messages.js';

class GameManager {
  async recruitCars() {
    const input = await Console.readLineAsync(INPUT_CARS);
  }

  announceInterimResult() {
    const cars = [{ name: 'pobi', movement: '-' }];
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default GameManager;
