import { Random, Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import User from './User.js';

class Car {
  generateRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    return randomNumber;
  }

  async forwardCar() {
    const user = new User();
    const cars = await user.inputCarName();
    const tryCount = await user.inputTryCount();

    Console.print(GAME_MESSAGE.result);

    for (let i = 0; i < tryCount; i++) {
      cars.forEach(car => {
        let resultMark = '-';
        if (this.generateRandomNumber() >= 4) {
          resultMark += '-';
        }
        Console.print(`${car} : ${resultMark}`);
      });
      Console.print('');
    }
  }
}

export default Car;
