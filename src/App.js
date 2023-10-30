import GameController from './controller/GameController';

class App {
  async play() {
    const controller = new GameController();

    await controller.startGame();
  }
}

export default App;
