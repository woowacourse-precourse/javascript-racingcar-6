import { GAME_MESSAGES } from './constants/gameMessages.js';
import { inputView } from './ViewController/InputView.js';
import RacingGame from './models/RacingGame.js';
import AllNamesOfCars from './models/AllNamesOfCars.js';
import CountOfAttemp from './models/CountOfAttemp.js';
import { outputView } from './ViewController/outputView.js';

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

  /**
   * @type { string [] } 우승자
   */

  #winners;

  /**
   * @type {Array<Map<string, number|string>>} 각 라운드마다 결과를 담을 배열
   */

  #roundStatus;

  async play() {
    await this.inputCarNames();
    await this.inputCountOfAttemp();
    this.getGameResults();
    this.printGameResults();
    this.printGameWinner();
  }

  async inputCarNames() {
    const valueOfCarNames = await inputView.readLine(GAME_MESSAGES.input_car_names);
    this.#cars = AllNamesOfCars.fromInputString(valueOfCarNames);
  }

  async inputCountOfAttemp() {
    const valueOfAttemps = await inputView.readLine(GAME_MESSAGES.input_count_of_attemp);
    this.#attemps = CountOfAttemp.fromInputString(valueOfAttemps);
    outputView.divideLine();
  }

  getGameResults() {
    this.#game = new RacingGame(this.#cars, this.#attemps);
    this.#roundStatus = this.#game.getResult();
    this.#winners = this.#game.getFinalWinner();
  }

  printGameResults() {
    outputView.printLine(GAME_MESSAGES.print_result_start);
    this.#roundStatus.forEach((round) => this.printRoundStatus(round));
  }

  printRoundStatus(round) {
    round.forEach((status, car) => {
      outputView.printLine(GAME_MESSAGES.game_result(status, car));
    });
    outputView.divideLine();
  }

  printGameWinner() {
    outputView.printLine(GAME_MESSAGES.winner_result(this.#winners));
  }
}

export default App;
