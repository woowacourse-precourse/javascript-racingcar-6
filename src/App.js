import RacingCar from './controller/RacingCar.js';

class App {
  constructor() {
    this.racingCar = new RacingCar();
  }

  async play() {
    await this.racingCar.start();
  }
}

export default App;
