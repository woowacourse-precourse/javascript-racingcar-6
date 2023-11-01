import InputView from '../view/inputView';
import OutputView from '../view/OutputView';
import CarGame from '../model/CarGame';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  async start() {
    await this.readCarName();
  }

  async readCarName() {
    const carName = await InputView.readCarName();
    await this.setCarData(carName.split(','));
  }

  async setCarData(list) {
    this.#carGame.setCarList(list);
    await this.readAttemptNumber();
  }

  async readAttemptNumber() {
    const attemptNumber = await InputView.readAttemptNumber();
    await this.setAttemptNumber(Number(attemptNumber));
  }

  async setAttemptNumber(number) {
    this.#carGame.setAttemptNumber(number);
    this.startRace();
  }

  startRace() {
    OutputView.printStart();
    Array.from({ length: this.#carGame.getAttemptNumber() }).forEach(() => {
      this.#carGame.moveCars();
      OutputView.printMove(this.#carGame.getCurrentDistance());
      OutputView.printBlank();
    });
    this.printResult();
  }

  printResult() {
    const winner = this.#carGame.getWinner();
    OutputView.printWinner(winner);
  }
}

export default Controller;
