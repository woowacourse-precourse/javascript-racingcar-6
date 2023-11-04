import GameController from './controller/GameController.js';

class App {
  async play() {
    const controller = new GameController();

    await controller.runGame();
  }
}

export default App;
