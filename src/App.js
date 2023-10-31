import InputView from './views/InputView.js';
import Result from './models/Result.js';

class App {
  #result;

  async play() {
    const carNames = await InputView.setCarNames();
    const laps = await InputView.setLaps();
    this.#result = Result.setGameBoard(carNames.length);
  }
}

export default App;
