import { Console } from '@woowacourse/mission-utils';
import MoveCar from './class/moveCar.js';
import InputCarMoveCount from './class/gameStart.js';

class App {
  async play() {
    try {
      const inputCarMoveCount = new InputCarMoveCount();
      await inputCarMoveCount.userInput();
      const tryCount = await inputCarMoveCount.countInput();

      const moveCar = new MoveCar(inputCarMoveCount.cars);
      moveCar.startRacing(tryCount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

const app = new App();
app.play();

export default App;