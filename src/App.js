import { GAME_MESSAGES } from './constants/gameMessages.js';
import { inputView } from './ViewController/InputView.js';
import RacingGame from './models/RacingGame.js';
import AllNamesOfCars from './models/AllNamesOfCars.js';

class App {
  /**
   * @type { RacingGame }
   */

  #game;

  /**
   * @type { string[] } 모든 자동차 이름을 담을 필드
   */

  #cars;

  async play() {
    this.#game = new RacingGame();
    await this.inputCarNames();
  }

  async inputCarNames() {
    const valueOfCarNames = await inputView.readLine(GAME_MESSAGES.input_car_names);
    this.#cars = AllNamesOfCars.fromInputString(valueOfCarNames);

    console.log(this.#cars.getAllCars());
  }
}

export default App;
