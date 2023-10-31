import { Console } from '@woowacourse/mission-utils';
import UpdatedInfo from './UpdatedInfo.js';
import MESSAGE from '../constants/message.js';

class Print {
  static executeProcess(cars, numberOfTimes) {
    Console.print(MESSAGE.result.execution);
    let updatedCars = new Map([...cars]);
    for (let i = 1; i <= numberOfTimes; i += 1) {
      const [message, info] = UpdatedInfo.getCurrentCarInfo(updatedCars);
      Console.print(message);
      updatedCars = info;
    }
    return updatedCars;
  }

  static announceWinner(cars) {
    const winners = [];
    const max = Math.max(...cars.values());
    cars.forEach((value, key) => {
      if (value === max) {
        winners.push(key);
      }
    });
    Console.print(`${MESSAGE.result.finalWinner}${winners.join(', ')}`);
  }
}

export default Print;
