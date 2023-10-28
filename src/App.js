import { Console } from '@woowacourse/mission-utils';
import getCarNames from './input/getCarNames.js';

class App {
  async play() {
    this.cars = await getCarNames();
    Console.print(this.cars);
  }
}

export default App;
