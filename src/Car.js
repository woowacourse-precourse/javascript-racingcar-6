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

    Console.print('\n' + GAME_MESSAGE.result);

    const resultArray = new Array(cars.length).fill('');

    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car, index) => {
        const randomNumber = this.generateRandomNumber();
        if (randomNumber >= 4) {
          resultArray[index] += '-';
        }
      });

      cars.forEach((car, index) => {
        Console.print(`${car} : ${resultArray[index]}`);
      });

      Console.print('');
    }
  }
}

export default Car;
