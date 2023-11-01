import { Random, Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import User from './User.js';
import Winner from './Winner.js';

class Car {
  async forwardCarResult() {
    const user = new User();
    const cars = await user.inputCarName();
    const tryCount = await user.inputTryCount();

    Console.print('\n' + GAME_MESSAGE.result);

    this.tryForward(cars, tryCount);
  }

  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  tryForward(cars, tryCount) {
    const winner = new Winner();
    const allForwardResult = new Array(cars.length).fill('');

    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car, index) => {
        this.printForwardResult(allForwardResult, index, cars);
      });
      Console.print('');
    }

    winner.finalWinner(cars, allForwardResult);
  }

  printForwardResult(allForwardResult, index, cars) {
    const randomNumber = this.generateRandomNumber();
    if (randomNumber >= 4) {
      allForwardResult[index] += '-';
    }
    Console.print(`${cars[index]} : ${allForwardResult[index]}`);
  }
}

export default Car;
