import RacingCar from "./RacingCar.js";
import { inputCarNames, inputMovementCount } from "./helpers/index.js";

class App {
  async play() {
    const carNamesInput = await inputCarNames();
    const movementCountInput = await inputMovementCount();

    const racingCars = RacingCar.initializeCars(carNamesInput.split(","));

    RacingCar.playGame(racingCars, movementCountInput);
  }
}

export default App;
