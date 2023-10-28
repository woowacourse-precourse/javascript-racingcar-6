import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/Message";
import CarNameValidator from "./validate/CarNameValidator";
import RaceTrialValidator from "./validate/RaceTrialValidator"; 

class App {
  async play() {
    Console.print(GAME_MESSAGE.inputName);
    const carNames = await Console.readLineAsync("");

    CarNameValidator.namesvalidate(carNames);

    Console.print(GAME_MESSAGE.inputNumber);
    const raceTrial = await Console.readLineAsync("");

    RaceTrialValidator.validateTrial(raceTrial);
  }
}

export default App;