import { Console } from '@woowacourse/mission-utils';
import getCarNames from './input/getCarNames.js';
import getRaceNumber from './input/getRaceNumber.js';

class App {
  async play() {
    this.cars = await getCarNames();
    this.raceNumber = await getRaceNumber();
    Console.print(this.cars);
    Console.print(this.raceNumber);
  }
}

export default App;
