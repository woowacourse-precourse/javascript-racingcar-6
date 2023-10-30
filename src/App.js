import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE, READ_MESSAGE } from './constants/constants';
import { validateIsNumber, validateLength } from './utils/validate';
import { createCarData } from './utils/createCarData';
import { createRandomNumber } from './utils/createRandomNumber';
import { goStopCar } from './utils/goStopCar';
import { pickWinner } from './utils/pickWinner';
class App {
  async play() {
    const carName = await Console.readLineAsync(READ_MESSAGE.start);
    const carNameList = validateLength(carName);

    let moveCount = await Console.readLineAsync(READ_MESSAGE.move);
    moveCount = validateIsNumber(moveCount);

    Console.print(PRINT_MESSAGE.result);

    let carData = createCarData(carNameList);

    for (let i = 0; i < moveCount; i++) {
      carData = createRandomNumber(carData);

      carData = goStopCar(carData);

      carData.forEach((data) => {
        Console.print(`${data.name} : ${data.result}`);
      });

      Console.print('\n');
    }

    const winners = pickWinner(carData);

    Console.print(`${PRINT_MESSAGE.winner}${winners.join(', ')}`);
  }
}

export default App;
