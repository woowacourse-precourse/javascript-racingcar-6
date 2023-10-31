import Players from './Players.js';
import Input from './Input.js';

class Game {
  #players;
  #numberOfGames;

  async play() {
    await this.setPlayerNames();
    await this.setNumberOfGames();
    this.race();
  }

  async setPlayerNames() {
    this.#players = new Players(await Input.returnArrayOfPlayers());
  }

  async setNumberOfGames() {
    this.#numberOfGames = await Input.returnNumberOfGames();
  }

  race() {
    Array.from({ length: this.#numberofGames }).forEach(() => {
      this.#players.race();
      this.#players.print();
    });
  }

  printResult() {

  }
}

export default Game;