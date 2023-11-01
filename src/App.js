import RacingCar from './RacingCar.js';

class App {
  async play() {
    const racingCar = new RacingCar();
    await racingCar.startGame();
  }
}

export default App;
