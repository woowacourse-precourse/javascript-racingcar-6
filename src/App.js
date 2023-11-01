import RacingCar from "./RacingCar.js";

class App {
  async play() {
    const racingCarGame = new RacingCar();
    await racingCarGame.init();
  }
}

export default App;
