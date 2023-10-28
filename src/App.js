import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import User from './User.js';

class App {
  async play() {
    Console.print(GAME_MESSAGE.start);

    const user = new User();
    const cars = await user.inputCarName();
  }
}

export default App;
