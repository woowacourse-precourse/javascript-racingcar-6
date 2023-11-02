import RaceController from './controllers/RaceController.js';

class App {
  constructor() {
    this.raceController = new RaceController();
  }

  async play() {
    await this.raceController.start();
  }
}

export default App;
