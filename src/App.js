import RacingCar from "./RacingCar.js";
import RacingGame from "./RacingGame.js";
import { inputCarNames, inputGameRoundCount } from "./helpers/index.js";

class App {
  async play() {
    const carNamesInput = await inputCarNames();
    const gameRoundCountInput = await inputGameRoundCount();

    const racingCars = RacingCar.initializeCars(carNamesInput.split(","));

    RacingGame.play(racingCars, gameRoundCountInput);
  }
}

export default App;
