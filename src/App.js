import { userInputCarsName, userInputTrialCount } from "./userInterface.js";
import {
  getCarsClassArray,
} from "./utils/gameSupport.js";
class App {
  async play() {
    const carsStringNameArray = await userInputCarsName();
    const cars = getCarsClassArray(carsStringNameArray);
    const trialCountNumber = await userInputTrialCount();
  }
}

export default App;
