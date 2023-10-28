import { Console } from '@woowacourse/mission-utils';
import carNameInput from './input/carNameInput.js';

class App {
  async play() {
    this.cars = await carNameInput();
    Console.print(this.cars);
  }
}

export default App;
