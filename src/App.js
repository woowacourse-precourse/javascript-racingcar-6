import InputController from "./Controller/InputController.js";
import GameController from "./Controller/GameController.js";

class App {
  async play() {
    try {
      await new InputController().init();
      new GameController().init();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
