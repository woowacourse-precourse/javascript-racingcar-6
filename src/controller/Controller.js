import Racing from '../models/Racing.js';
import Validator from '../models/Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #carList;

  #roundNumber;

  #status;

  #winner;

  async progress() {
    await this.settingCarList();
    await this.settingRound();
    this.racing = new Racing(this.#carList, this.#roundNumber);
    this.roundResult();
    this.finalResult();
  }

  async settingCarList() {
    const inputCarNames = await InputView.readCarNames();
    Validator.carNames(inputCarNames);
    this.#carList = inputCarNames;
  }

  async settingRound() {
    const inputRoundNumber = await InputView.readRoundNumber();
    Validator.roundNumber(inputRoundNumber);
    this.#roundNumber = Number(inputRoundNumber);
  }

  roundResult() {
    OutputView.printEmptystring();
    OutputView.printResultInfo();
    this.#status = this.racing.race();
    OutputView.printRoundResult(this.#status);
  }

  finalResult() {
    this.#winner = this.racing.findWinner();
    OutputView.printFinalResult(this.#winner);
  }
}

export default Controller;
