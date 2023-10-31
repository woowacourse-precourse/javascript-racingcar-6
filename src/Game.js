import { Console } from '@woowacourse/mission-utils';
import Players from './Players.js';
import Input from './Input.js';

class Game {
  #players;
  #numberOfGames;

  async play() {
    await this.setPlayerNames();
    await this.setNumberOfGames();
    Console.print('\n실행 결과');
    this.race();
    this.printResult();
  }

  async setPlayerNames() {
    this.#players = new Players(await Input.returnArrayOfPlayers());
  }

  async setNumberOfGames() {
    this.#numberOfGames = await Input.returnNumberOfGames();
  }

  race() {
    Array.from({ length: this.#numberOfGames }).forEach(() => {
      this.#players.race();
      this.#players.print();
    });
  }

  printResult() {
    const output = [];
    this.#players.winners().forEach((winner) => {
      output.push(winner);
    });
    Console.print(`최종 우승자 : ${output.join(', ')}`);
  }
}

export default Game;