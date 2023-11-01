import Utils from './utils/Utils';
import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE, READ_MESSAGE } from './constants/constants';
import { validateIsNumber, validateLength } from './utils/validate';
import { createRandomNumber } from './utils/createRandomNumber';

class App {
  async play() {
    const carName = await Console.readLineAsync(READ_MESSAGE.start);
    const carNameList = validateLength(carName);

    let moveCount = await Console.readLineAsync(READ_MESSAGE.move);
    moveCount = validateIsNumber(moveCount);

    Console.print(PRINT_MESSAGE.result);

    let carData = Utils.createCarData(carNameList);

    for (let i = 0; i < moveCount; i++) {
      carData = createRandomNumber(carData);

      carData = Utils.goStopCar(carData);

      carData.forEach((data) => {
        Console.print(`${data.name} : ${data.result}`);
      });

      Console.print('\n');
    }

    const winnerList = Utils.pickWinner(carData);

    Console.print(`${PRINT_MESSAGE.winner}${winnerList.join(', ')}`);
  }
}

export default App;
