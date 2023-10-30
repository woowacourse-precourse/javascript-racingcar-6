import {
  inputCarNameHandler,
  inputTryNumberHandler,
} from "./utils/inputHandler.js";
import RacingGame from "./racingGame/RacingGame.js";

class App {
  async play() {
    const carNameList = await inputCarNameHandler();
    const tryNumber = await inputTryNumberHandler();

    const racingGame = new RacingGame(carNameList, tryNumber);
    racingGame.startGame();
  }
}

export default App;
