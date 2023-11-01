import CarRacingController from './controllers/CarRacingController';

class App {
  constructor() {
    this.controller = new CarRacingController();
  }

  async play() {
    const raceCount = await this.controller.getAndValidateInput();
    this.controller.playRacingGame(raceCount);
  }
}

export default App;
