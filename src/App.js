import RacingCar from '../RacingCar/index.js';

class App {
  async play() {
    const racingCar = new RacingCar();
    await racingCar.startGame();
  }
}

export default App;
