import RacingCar from "./RacingCar/RacingCar.js";

class App {
  async play() {
    const racingCar = new RacingCar();
    racingCar.start();
  }
}

export default App;
