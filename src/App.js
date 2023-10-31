import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import Car from './Car.js';

class App {
  async play() {
    const car = new Car();
    await car.forwardCarResult();
  }
}

export default App;
