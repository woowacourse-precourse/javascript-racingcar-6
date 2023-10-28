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
    this.#validatePlayersCount(players);
    this.#validateDuplicationPlayer(players);

    players.forEach((player) => {
      this.#validatePlayerName(player);
      this.#validatePlayerNameLength(player);
    });
  }

  splitPlayerNames(names) {
    return names.split(GAME_RULL.DIVISION).map((name) => name.trim());
  }

  #validatePlayersCount(players) {
    const isWrongPlayerCount =
      players.length < GAME_RULL.PLAYER_MIN_NUMBER ||
      players.length > GAME_RULL.PLAYER_MAX_NUMBER;

    if (isWrongPlayerCount) {
      throw new Error(ERROR_MESSAGE.PLAYER_COUNT);
    }
  }

  #validateDuplicationPlayer(players) {
    if (players.length !== new Set(players).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATION);
    }
  }

  #validatePlayerName(name) {
    if (!REG_EXP.test(name)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
  }

  #validatePlayerNameLength(name) {
    const isWrongNameLength =
      !name.length || name.length > GAME_RULL.CAR_NAME_MAX_LENGTH;

    if (isWrongNameLength) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_CHARACTERS);
    }
  }
}
