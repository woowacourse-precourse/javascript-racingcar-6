import InputValidator from '../validator/inputValidator.js';
import CarService from '../services/carService.js';
import InputView from '../views/inputView.js';
import GAME_OPTION from '../constants/gameOption.js';

class GameController {
  #carService;

  #inputView;

  constructor() {
    this.#inputView = new InputView();
    this.#carService = new CarService();
  }

  async run() {
    await this.getCarNames();
    await this.getRoundNumber();
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
}

export default GameController;
