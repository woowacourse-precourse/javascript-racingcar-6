import GameController from './controller/GameController';

class App {
  async play() {
    const gameController = new GameController();
    await gameController.play();
  }
}

export default App;
