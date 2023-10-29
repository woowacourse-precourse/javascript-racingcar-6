import RacingCarController from './controllers/RacingCarController.js';

class App {
  async play() {
    const racingCarController = new RacingCarController();
    racingCarController.startGame();
  }
}

export default App;
