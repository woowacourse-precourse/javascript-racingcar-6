import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "./userinput.js";
import Race from "./race.js";

class App {
  async play() {
    const userInput = new UserInput();
    const carArray = await userInput.getCarInput();
    await userInput.validateCarArray(carArray);

    const raceTryInput = await userInput.getRaceTryInput();
    await userInput.validateRaceTryInput(raceTryInput);
  }
}

const app = new App();
app.play();

export default App;
