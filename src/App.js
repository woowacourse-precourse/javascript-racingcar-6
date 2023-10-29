import { Console } from '@woowacourse/mission-utils';
import { inputCarName, inputNumber, printAction } from './InOutPut';
import { checkChampion, curCarState, isForward, makeRandomNums } from './Play';

class App {
  async play() {
    const carNames = await inputCarName();
    const number = await inputNumber();

    let cars = carNames.map((carName) => [carName, 0]);

    Console.print(`실행 결과\n`);
    for (let i = 0; i < number; i += 1) {
      const gameResult = makeRandomNums(carNames);

      const forwardArr = isForward(gameResult);

      cars = curCarState(cars, forwardArr);

      printAction(cars);
    }

    const champion = checkChampion(cars);

    printAction(champion);
  }
}

export default App;
