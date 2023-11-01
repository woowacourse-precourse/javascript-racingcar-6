import Racing from '../models/Racing.js';
import Validation from '../models/Validation.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #carList;

  #roundNumber;

  #status;

  #winner;

  constructor() {
    this.carRace = new Racing();
  }

  async progress() {
    await this.settingCarList();
    await this.settingRound();
    this.roundResult();
    this.finalResult();
  }

  async settingCarList() {
    const nameInputValue = await InputView.carList();
    Validation.inputCar(nameInputValue);
    this.#carList = nameInputValue;
  }

  async settingRound() {
    const roundInputValue = await InputView.round();
    Validation.inputRound(roundInputValue);
    this.#roundNumber = Number(roundInputValue);
  }

  roundResult() {
    OutputView.printEmptystring();
    OutputView.printResultInfo();
    this.#status = this.carRace.generateStatus(
      this.#carList,
      this.#roundNumber,
    );
    OutputView.printRoundResult(this.#status);
  }

  finalResult() {
    this.#winner = this.carRace.findWinner();
    OutputView.printFinalResult(this.#winner);
  }
}

export default Controller;
