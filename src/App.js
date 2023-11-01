import MoveCar from './class/moveCar.js';
import InputCarMoveCount from './class/gameStart.js';
class App {
  async play() {
    try {
      const inputCarMoveCount = new InputCarMoveCount();
      await inputCarMoveCount.userInput();

      const moveCar = new MoveCar(inputCarMoveCount.cars);
      moveCar.startRacing(inputCarMoveCount.tryCount);

    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;