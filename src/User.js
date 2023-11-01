import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import Validation from './Validation.js';

class User {
  async inputCarName() {
    Console.print(GAME_MESSAGE.start);
    const inputcars = await Console.readLineAsync('');
    const cars = inputcars.split(',');

    Validation.inputCarName(inputcars);

    return cars;
  }

  async inputTryCount() {
    Console.print(GAME_MESSAGE.inputTry);
    const tryCount = await Console.readLineAsync('');

    Validation.inputTryCount(tryCount);

    return tryCount;
  }
}

export default User;
