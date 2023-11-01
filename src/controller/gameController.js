import InputValidator from '../validator/inputValidator.js';
import CarService from '../services/carService.js';
import InputView from '../views/inputView.js';
import GAME_OPTION from '../constants/gameOption.js';
import OutputView from '../views/outputView.js';

class GameController {
  #carService;

  #inputView;

  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#carService = new CarService();
  }

  async run() {
    await this.getCarNames();
    const roundNumber = await this.getRoundNumber();
    await this.race(roundNumber);
    await this.getWinner();
  }

  async getCarNames() {
    const carNames = InputValidator.validateCarNames(
      await this.#inputView.readCarNames(),
    );
    carNames.split(GAME_OPTION.inputSeparator).forEach((carName) => {
      this.#carService.addCar(carName);
    });
  }

  async getRoundNumber() {
    const roundNumber = InputValidator.validateRoundNumber(
      await this.#inputView.readRoundNumber(),
    );

    return roundNumber;
  }

  async race(roundNumber) {
    this.#outputView.printRoundResultMessage();
    for (let i = 1; i <= roundNumber; i += 1) {
      this.#carService.race();
      const carList = this.#carService.getCarList();
      this.#outputView.printCarList(carList);
    }
  }

  async getWinner() {
    const winnerList = this.#carService.getWinnerList();
    this.#outputView.printWinner(winnerList);
  }
}

export default GameController;
