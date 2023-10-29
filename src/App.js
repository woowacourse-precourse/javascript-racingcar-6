import { Console } from '@woowacourse/mission-utils';
import strings from './constants.js';
import CreateCarName from './CreateCarName.js';

class App {
  async play() {
    const inputName = await Console.readLineAsync(strings.ASK_NAME);
    const namingCar = new CreateCarName();
    namingCar.carName(inputName);
  }
}
export default App;
