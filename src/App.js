import RaceController from './controller/RaceController.js';

class App {
  #controller;

  async play() {
    this.#controller = new RaceController();

    await this.#controller.setCarList();
    await this.#controller.setMoveCount();
    this.#controller.startRace();
    this.#controller.displayWinners();
  }
}

export default App;
