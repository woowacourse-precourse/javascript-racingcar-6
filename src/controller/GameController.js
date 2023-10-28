import { GAME_RULL } from '../constants/gameRules.js';
import { ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';

export default class GameController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
  }

  async init() {
    const carNames = await this.view.getUserInput(MESSAGE.START);
    this.checkValidation(carNames);
  }

  checkValidation(userInput) {
    this.#validateCarCount(userInput);

    return true;
  }

  #validateCarCount(carNames) {
    const cars = carNames.split(GAME_RULL.DIVISION).map((name) => name.trim());
    const isWrongPlayerCount =
      cars.length < GAME_RULL.PLAYER_MIN_NUMBER ||
      cars.length > GAME_RULL.PLAYER_MAX_NUMBER;

    if (isWrongPlayerCount) {
      throw new Error(ERROR_MESSAGE.PLAYER_COUNT);
    }
  }

  #validateCarName(carName) {}
}
