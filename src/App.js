import GameController from "./controller/GameController.js";

class App {
  async play() {
    const controller = new GameController();
    await controller.start();
  }
}

export default App;
