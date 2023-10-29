import { Console } from '@woowacourse/mission-utils';
import MoveCar from './class/moveCar.js';
import InputCarMoveCount from './class/gameStart.js';

class App {
  async play() {
    const inputCarMoveCount = new InputCarMoveCount();
    await inputCarMoveCount.userInput();

    const moveCar = new MoveCar();
    moveCar.carMoveCompare();
  }
}

const app = new App();
app.play();

export default App;