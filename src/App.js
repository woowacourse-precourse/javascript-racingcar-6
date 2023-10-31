import Car from "./Car.js";
import { inputCarNames, inputMovementCount } from "./helpers/index.js";

class App {
  async play() {
    const carNamesInput = await inputCarNames();
    const movementCountInput = await inputMovementCount();

    const cars = Car.initializeCars(carNamesInput.split(","));

    Car.playGame(cars, movementCountInput);
  }
}

export default App;
