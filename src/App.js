import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE, READ_MESSAGE } from './constants/constants';
import { validateIsNumber, validateLength } from './utils/validate';
import { createCarData } from './utils/createCarData';
import { createRandomNumber } from './utils/createRandomNumber';
import { goStopCar } from './utils/goStopCar';
class App {
  async play() {
    const carName = await Console.readLineAsync(READ_MESSAGE.start);
    validateLength(carName);

    const moveCount = await Console.readLineAsync(READ_MESSAGE.move);
    validateIsNumber(moveCount);

    Console.print(PRINT_MESSAGE.result);

    const carData = createCarData(carName);

    for (let i = 0, moveCount = Number(moveCount); i < moveCount; i++) {
      carData = createRandomNumber(carData);

      carData = goStopCar(carData);
    }
  }
}

export default App;
