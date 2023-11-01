import RacingCar from "./RacingCar.js";
import RacingGame from "./RacingGame.js";
import { inputCarNames, inputMovementCount } from "./helpers/index.js";

class App {
  async play() {
    const carNamesInput = await inputCarNames();
    const movementCountInput = await inputMovementCount();

    const racingCars = RacingCar.initializeCars(carNamesInput.split(","));

    RacingGame.play(racingCars, movementCountInput);
  }
}

export default App;
