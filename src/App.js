import { userInputCarsName, userInputTrialCount } from "./userInterface.js";
import {
  getCarsClassArray,
} from "./utils/gameSupport.js";
class App {
  async play() {
    const carsStringNameArray = await userInputCarsName();
    const cars = getCarsClassArray(carsStringNameArray);
    const trialCountNumber = await userInputTrialCount();
    MissionUtils.Console.print(`${RESULT_MESSAGE}`);
    getMatchResult(cars, trialCountNumber);
    const winners = getWinnerArray(cars);
    MissionUtils.Console.print(
      `${FINAL_WINNER_MESSAGE} ${COLON} ${winners.join(", ")}`
    );
  }
}

export default App;
