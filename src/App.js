import Controller from './controllers/Controller.js';

class App {
  #controller;

  async play() {
    this.#controller = new Controller();
    await this.#controller.startGame();
  }
}

export default App;
