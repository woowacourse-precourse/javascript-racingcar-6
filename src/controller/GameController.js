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
    const players = await this.getPlayers();
    this.setPlayers(players);

    await this.setTryCount();

    this.view.print(MESSAGE.RESULT);
    const loopCount = this.model.getTryCount();
    Array(loopCount)
      .fill(0)
      .forEach((_) => {
        this.model.setMoveCount();
        this.printResult();
      });

    this.printWinner();
  }

  async getPlayers() {
    const playerNames = await this.getPlayerNames();
    const players = this.splitPlayerNames(playerNames);
    this.checkValidatePlayer(players);
    return players;
  }

  async getPlayerNames() {
    return this.view.getUserInputAsync(MESSAGE.START);
  }

  setPlayers(players) {
    players.forEach((playerName) => {
      this.checkValidateName(playerName);
      const player = new Player(playerName);
      this.model.addPlayer(player);
    });
  }

  async getTryCount() {
    return this.view.getUserInputAsync(MESSAGE.TRY_COUNT);
  }

  async setTryCount() {
    const tryCount = await this.getTryCount();
    this.#validateTryCount(tryCount);
    this.model.setTryCount(tryCount);
  }

  printResult() {
    const players = this.model.getPlayers();
    players.forEach((player) => this.view.printResult(player));
    this.view.print();
  }

  printWinner() {
    const winners = this.model.getWinner();
    this.view.printWinner(winners);
  }

  splitPlayerNames(names) {
    return names.split(GAME_RULL.DIVISION).map((name) => name.trim());
  }

  checkValidatePlayer(players) {
    this.#validatePlayersCount(players);
    this.#validateDuplicationPlayer(players);
  }

  checkValidateName(playerName) {
    this.#validatePlayerName(playerName);
    this.#validatePlayerNameLength(playerName);
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
