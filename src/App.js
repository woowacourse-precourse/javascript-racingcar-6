import RacingCarController from './controllers/RacingCarController.js';

class App {
  play() {
    const racingCarController = new RacingCarController();
    racingCarController.startGame();
  }
}

export default App;
