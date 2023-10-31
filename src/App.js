import { RaceGameController } from "./Controller/RaceGameController";

class App {
  #controller;

  constructor() {
    this.#controller = new RaceGameController();
  }

  async play() {
    try {
      await this.#controller.game();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
