import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import User from './User.js';
import Car from './Car.js';

class App {
  async play() {
    const car = new Car();
    await car.forwardCar();
  }
}

export default App;
