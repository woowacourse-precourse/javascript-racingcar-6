import Race from './models/Race.js';
import InputView from './views/InputView.js';

class App {
  /**
   * 레이스에 참가하는 자동차 이름과 점수를 나타내는 스코어보드
   * @types { [key: string]: number }
   */
  #scoreBoard;

  async play() {
    const carNames = await InputView.getCarNames();
    this.#scoreBoard = Race.getScoreBoard(carNames);
  }
}

export default App;
