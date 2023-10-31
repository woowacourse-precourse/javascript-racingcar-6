import RaceController from './controller/RaceController';

class App {
  constructor() {
    this.RaceController = new RaceController();
  }

  async play() {
    await this.RaceController.insertInput();
  }
}

export default App;
