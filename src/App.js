import GameController from './controller/GameController.js';

class App {
  #startGame;

  constructor() {
    this.#startGame = new GameController();
  }


  async play() {
    await this.#startGame.ready();
  }
}

export default App;
