import { Console } from '@woowacourse/mission-utils';
import Players from './Players.js';
import { MESSAGE, ERROR } from './Constant.js';

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
    if (trimmed === NaN) throw new Error(ERROR.WRONG_NUMBER);
    this.#numberOfGames = trimmed;
  }
}

export default Game;