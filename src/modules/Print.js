import { Console } from '@woowacourse/mission-utils';
import Decision from './Decision.js';
import MESSAGE from '../constants/message.js';

class Print {
  static executeProcess(cars, numberOfTimes) {
    Console.print(MESSAGE.result.execution);
    const updatedCars = new Map([...cars]);
    for (let i = 1; i <= numberOfTimes; i += 1) {
      const result = [];
      updatedCars.forEach((value, key) => {
        let moveNum = value;
        if (Decision.moveForward()) {
          updatedCars.set(key, (moveNum += 1));
        }
        result.push(`${key} : ${MESSAGE.result.distance.repeat(moveNum)}\n`);
      });
      Console.print(result.join(''));
    }
    return updatedCars;
  }
}

export default Print;
