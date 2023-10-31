import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import * as utils from './CarGameUtils.js';

class App {
  async play() {
    const carList = [];

    const carNames = await utils.inputCarNames();
    if (!utils.isValidCarNames(carNames))
      throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.\n');
    const carNameList = carNames.split(',');

    carNameList.forEach(carName => {
      if (!utils.isValidCarName(carName))
        throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.\n');
      carList.push(new Car(carName));
    });

    const TRY_NUM = await utils.inputTryNum();
    if (!utils.isValidTryNum(TRY_NUM))
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.\n');

    Console.print('\n실행 결과');
    for (let i = 0; i < TRY_NUM; i++) {
      utils.tryCarGame(carList);
      utils.printTryResult(carList);
    }

    const winners = utils.getWinners(carList);
    utils.printWinners(winners);
  }
}
export default App;
