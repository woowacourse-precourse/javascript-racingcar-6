import GameController from "./Controller/GameController.js";

class App {
  async play() {
    try {
      await new GameController().init();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
