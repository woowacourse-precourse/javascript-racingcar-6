import { Console } from '@woowacourse/mission-utils';
import processInput from './utils/processInput';
import Test from './utils/Test';
import printWinner from './utils/printWinner';
import { GAME_MESSAGE } from './constants/messages';

class App {
  async play() {
    const { carNameArr, testNum } = await processInput(); 

    Console.print(GAME_MESSAGE.gameResult);

    const test = new Test(carNameArr);
    for (let i = 0; i < testNum; i++) await test.testing(carNameArr);

    await printWinner(carNameArr, [...test.moveCounts]);
  }
}

export default App;
