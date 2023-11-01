import GameController from './controller/GameController.js';

class App {
  #startGame = new GameController();

  async play() {
    await this.#startGame.ready();
  }
}

export default App;
