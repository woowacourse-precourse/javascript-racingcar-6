import { GAME_RULL } from '../constants/gameRules.js';
import { ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';
import { REG_EXP } from '../constants/regexp.js';

export default class GameController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
  }

  async start() {
    const playerNames = await this.view.getUserInput(MESSAGE.START);
    const players = this.splitPlayerNames(playerNames);
    players.forEach((player) => {
      console.log(player);
    });
  }

  splitPlayerNames(names) {
    return names.split(GAME_RULL.DIVISION).map((name) => name.trim());
  }

  checkValidationCar(car) {
    this.#validatePlayersCount(car);
    return true;
  }

  #validatePlayersCount(players) {
    const isWrongPlayerCount =
      players.length < GAME_RULL.PLAYER_MIN_NUMBER ||
      players.length > GAME_RULL.PLAYER_MAX_NUMBER;

    if (isWrongPlayerCount) {
      throw new Error(ERROR_MESSAGE.PLAYER_COUNT);
    }
  }

  #validateCarName(carName) {
    if (!REG_EXP.test(carName)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
  }
}
