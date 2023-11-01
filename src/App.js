import RacingController from './controller/RacingController.js';

class App {
  constructor() {
    this.racing = new RacingController();
  }

  async play() {
    await this.racing.start();
  }
}

export default App;
