import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE, READ_MESSAGE } from './constants/constants';
import { validateIsNumber, validateLength } from './utils/validate';
import { createCarData } from './utils/createCarData';
class App {
  async play() {
    const carName = await Console.readLineAsync(READ_MESSAGE.start);
    validateLength(carName);

    const moveCount = await Console.readLineAsync(READ_MESSAGE.move);
    validateIsNumber(moveCount);

    Console.print(PRINT_MESSAGE.result);

    const carData = createCarData(carName);
  }
}

export default App;
