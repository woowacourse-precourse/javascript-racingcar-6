import Players from './Players.js';
import Input from './Input.js';

class Game {
  #players;
  #numberOfGames;

  async play() {
    await this.setPlayerNames();
    await this.setNumberOfGames();
  }

  async setPlayerNames() {
    this.#players = new Players(await Input.returnArrayOfPlayers());
  }

  async setNumberOfGames() {
    this.#numberOfGames = await Input.returnNumberOfGames();
  }
}

export default Game;