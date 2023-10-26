import { getCarNames, getAttempts } from "./view/InputView.js";
import GameLogic from "./game/Game.js";

class App {
  #carNames;
  #attempts;
  #GAME;

  constructor() {
    this.#GAME = new GameLogic();
  }

  async play() {
    try {
      this.#carNames = await getCarNames();
      this.#attempts = await getAttempts();
      await this.#GAME.gameStart(this.#carNames, this.#attempts);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}


export default App;
