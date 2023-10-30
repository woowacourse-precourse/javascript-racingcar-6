import { Console } from '@woowacourse/mission-utils';
import ProcessInput from './utils/ProcessInput';
import Test from './utils/Test';
import PrintWinner from './utils/PrintWinner';

class App {
  async play() {
    const { carNameArr, testNum } = await ProcessInput(); 

    Console.print('실행 결과');
    const test = new Test(carNameArr);
    for (let i = 0; i < testNum; i++) await test.testing(carNameArr);

    await PrintWinner(carNameArr, test.moveCount);
  }
}

export default App;
