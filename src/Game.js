import { Console } from '@woowacourse/mission-utils';
import Players from './Players.js';

class Game {
  #players;
  #gameLength;

  async play() {
    await this.setPlayerName();
  }

  async setPlayerName() {
    const players = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.#players = new Players(players);
  }

  async setGameLength() {

  }
}

export default Game;