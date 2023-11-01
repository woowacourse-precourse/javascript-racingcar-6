import CarRacingController from './controllers/CarRacingController';
import CarRacingView from './views/CarRacingView';

class App {
  constructor() {
    this.controller = new CarRacingController(CarRacingView);
  }

  async play() {
    const raceCount = await this.controller.getAndValidateInput();
    this.controller.playRacingGame(raceCount);
  }
}

export default App;
