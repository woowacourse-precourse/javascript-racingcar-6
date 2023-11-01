import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { isValidInputs } from './utils/errorhandling';
import { start } from './start';

class App {
  async play() {

    const [inputCars, attempts] = await Promise.all([Console.readLineAsync(), Console.readLineAsync()]);

    isValidInputs(inputCars, attempts);

    const cars = inputCars.split(',').map(name => ({ name, position: '-' }));

    const result = start(cars, attempts);
    Console.print(result)

  }
}

export default App;