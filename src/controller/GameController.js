import { GAME_RULL } from '../constants/gameRules.js';
import { ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';
import { REG_EXP } from '../constants/regexp.js';
import Player from '../model/Player.js';

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

    players.forEach((playerName) => {
      this.#validatePlayerName(playerName);
      this.#validatePlayerNameLength(playerName);

      const player = new Player(playerName);
      this.model.addPlayer(player);
    });

    const tryCount = await this.view.getUserInput(MESSAGE.TRY_COUNT);
    this.#validateTryCount(tryCount);
    this.model.setTryCount(Number(tryCount));

    const roofCount = this.model.getTryCount();
    for (let i = 0; i < roofCount; i++) {
      this.model.setMoveCount();
      // this.view.printResult();
    }
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
    if (!REG_EXP.ONLY_ALPHABETS.test(name)) {
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

  #validateTryCount(tryCount) {
    const convertNumberTryCount = Number(tryCount);

    if (Number.isNaN(convertNumberTryCount)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    const isOverRange =
      convertNumberTryCount < GAME_RULL.MOVE_MIN_COUNT ||
      convertNumberTryCount > GAME_RULL.MOVE_MAX_COUNT;

    if (isOverRange) {
      throw new Error(ERROR_MESSAGE.INVALID_MOVE_COUNT);
    }
  }
}
