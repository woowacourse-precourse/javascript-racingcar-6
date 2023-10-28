import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class User {
  async inputCarName() {
    Console.print(GAME_MESSAGE.start);
    const cars = await Console.readLineAsync('');

    return cars.split(',').map(String);
  }

  async inputTryCount() {
    Console.print(GAME_MESSAGE.inputTry);
    const tryCount = await Console.readLineAsync('');

    return tryCount;
  }
}

export default User;
