import { GAME_MESSAGES } from './constants/gameMessages.js';
import { inputView } from './ViewController/InputView.js';
import RacingGame from './models/RacingGame.js';
import AllNamesOfCars from './models/AllNamesOfCars.js';
import CountOfAttemp from './models/CountOfAttemp.js';

class App {
  /**
   * @type { RacingGame } 게임 클래스
   */

  #game;

  /**
   * @type { string[] } 모든 자동차 이름을 담을 필드
   */

  #cars;

  /**
   * @type { number } 시도 횟수를 담을 필드
   */

  #attemps;

  async play() {
    this.#game = new RacingGame();
    await this.inputCarNames();
    await this.inputCountOfAttemp();
  }

  async inputCarNames() {
    const valueOfCarNames = await inputView.readLine(GAME_MESSAGES.input_car_names);
    this.#cars = AllNamesOfCars.fromInputString(valueOfCarNames);
  }

  async inputCountOfAttemp() {
    const valueOfAttemps = await inputView.readLine(GAME_MESSAGES.input_count_of_attemp);
    this.#attemps = CountOfAttemp.fromInputString(valueOfAttemps);
  }
}

export default App;
