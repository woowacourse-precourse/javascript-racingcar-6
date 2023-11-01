import RaceController from './controllers/RaceController.js';

class App {
  /** @type {RaceController} */
  #controller;

  async play() {
    this.#controller = new RaceController();

    await this.#controller.startLine();
    await this.#controller.startRace();
    this.#controller.finishLine();
  }
}

export default App;