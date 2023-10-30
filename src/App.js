import RacingController from "./controller/RacingController.js";
import { getPlayersName, getAttemptNumber } from "./controller/GameCustomize.js";

class App {
  async play() {
    const playersArray = await getPlayersName();
    const attemptNumber = await getAttemptNumber();

    const racingGame = new RacingController(playersArray,attemptNumber);
    racingGame.startRacing()
  }
}

export default App;