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

/*
const app = new App()
app.play();
*/

export default App;
