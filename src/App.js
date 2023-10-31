import { userInputCarsName, userInputTrialCount } from "./userInterface.js";
class App {
  async play() {
    const carsStringNameArray = await userInputCarsName();
  }
}

export default App;
