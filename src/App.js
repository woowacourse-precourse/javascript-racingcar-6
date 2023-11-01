import GameController from './classes/GameController';

class App {
  #gameController;

  async play() {
    this.#gameController = new GameController();
    await this.#gameController.play();
  }
}

export default App;
