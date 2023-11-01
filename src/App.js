import GameController from "./controller/GameController";

class App {
  #playgame;

  constructor() {
    this.#playgame = new GameController();
  }

  async play() {
    await this.#playgame.readUserInput();
  }
}

export default App;
