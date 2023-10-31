import RacingController from "./racing/RacingController.js";
import { getPlayersName, getAttemptNumber } from "./racing/GameCustomize.js";

class App {
  async play() {
    const playersArray = await getPlayersName();
    const attemptNumber = await getAttemptNumber();

    const racingGame = new RacingController(playersArray,attemptNumber);
    racingGame.startRacing();
  }
}

export default App;
