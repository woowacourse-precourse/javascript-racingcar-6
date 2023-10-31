import {
  handleCarNameInput,
  handleTryNumberInput,
} from "./utils/handleInput.js";
import RacingGame from "./racingGame/RacingGame.js";

class App {
  async play() {
    const carNameList = await handleCarNameInput();
    const tryNumber = await handleTryNumberInput();

    const racingGame = new RacingGame(carNameList, tryNumber);
    racingGame.startGame();
  }
}

export default App;
