import { Console } from '@woowacourse/mission-utils';
import getCarNames from './input/getCarNames.js';
import getRaceNumber from './input/getRaceNumber.js';
import getMoveCount from './game/getMoveCount.js';
import getResult from './game/getResult.js';

class App {
  async play() {
    this.cars = await getCarNames();
    this.raceNumber = await getRaceNumber();
    this.moveCount = getMoveCount(this.cars, this.raceNumber);
    this.result = getResult(this.cars, this.moveCount);
    Console.print(`최종 우승자 : ${this.result}`);
  }
}

export default App;
