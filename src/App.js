import Computer from "./Computer.js";
import User from "./User.js";

class App {
  async play() {
    this.carNameList = await User.inputCarName();
    this.attempts = await User.inputAttempts();

    const cars = Computer.generateCars(this.carNameList);

    Computer.runRace(cars, this.attempts);
    Computer.printRaceResult(cars);
  }
}

export default App;
