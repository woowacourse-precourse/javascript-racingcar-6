import { Console } from '@woowacourse/mission-utils';
import Players from './Players.js';
import { MESSAGE } from './Constant.js';
import CheckError from './CheckError.js';

class Game {
  #players;
  #numberOfGames;

  async play() {
    await this.setPlayerName();
  }

  async setPlayerName() {
    const players = await Console.readLineAsync(MESSAGE.NAME_INPUT);
    this.#players = new Players(players);
  }

  async setNumberOfGames() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER_INPUT);
    const trimmed = Number(input.trim());
    CheckError.isNumber(trimmed);
    this.#numberOfGames = trimmed;
  }
}

export default Game;