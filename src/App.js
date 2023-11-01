import { Console } from '@woowacourse/mission-utils';
import MoveCar from './class/moveCar.js';
import InputCarMoveCount from './class/gameStart.js';
import { ERROR_MESSAGE } from './Constants.js';

class App {
  async play() {
    try {
      const inputCarMoveCount = new InputCarMoveCount();
      await inputCarMoveCount.userInput();

      const moveCar = new MoveCar(inputCarMoveCount.cars);
      moveCar.startRacing(inputCarMoveCount.tryCount);

    } catch (error) {
      Console.print(ERROR_MESSAGE);
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;